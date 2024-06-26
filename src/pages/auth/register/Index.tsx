import { Button } from "@/components/Button";
import { Progress } from "@/components/Progress";
import { server } from "@/lib/axios";
import { registerFormSchema, RegisterFormSchema } from "@/schemas/registerForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReloadIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon, CheckCircleIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AccountFormRegister } from "./AccountForm";
import { AddressFormRegister } from "./AddressForm";
import { ConfirmationFormRegister } from "./ConfirmationForm";
import { PersonFormRegister } from "./PersonForm";

type FormFields = keyof RegisterFormSchema;

export function MultiStepFormRegister() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<RegisterFormSchema>(
    {} as RegisterFormSchema
  );

  const {
    register,
    control,
    getValues,
    setValue,
    watch,
    trigger,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormSchema>({
    resolver: zodResolver(registerFormSchema),
  });

  const handleNext = async () => {
    const formIsValid = await trigger(getFieldsForStep(currentStep));
    if (formIsValid) {
      setFormData({ ...formData, ...getValues() });
      setCurrentStep(currentStep + 1);
    }
  };

  const getFieldsForStep = (step: number): FormFields[] => {
    switch (step) {
      case 1:
        return ["name", "birthdate", "phone", "gender"];
      case 2:
        return ["cep", "address", "addressNumber", "uf", "complement"];
      case 3:
        return ["username", "password", "confirmPassword"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: RegisterFormSchema) => {
    const formData = await trigger();
    if (!formData) return;

    try {
      const tokenResponse = await server.post(
        "realms/10000/protocol/openid-connect/token",
        {
          client_id: "receipts-api",
          grant_type: "client_credentials",
          client_secret: "7aMsLHaSjLR9KtURpqGgdfcYqdEa8zbb",
        }
      );
      const token = "Bearer " + tokenResponse.data.access_token;
      const nameParts = data.name.split(" ");
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "";
      const formDataCreateUser = {
        enabled: true,
        username: data.username,
        email: data.username,
        firstName: firstName,
        lastName: lastName,
        emailVerified: false,
        attributes: {
          zoneinfo: [data.address + " " + data.cep],
          birthdate: [data.birthdate],
          phoneNumber: [data.phone],
          gender: [data.gender],
          fullname: [data.name],
          tenant: [100000],
          picture: ["somelink"],
        },
      };
      const responseSaveUser = await server.post(
        "admin/realms/10000/users",
        formDataCreateUser,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (responseSaveUser.status === 201) {
        const responseGetUser = await server.get(`admin/realms/10000/users`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          params: { email: data.username },
        });


        const userId = responseGetUser.data[0].id;
        const passwordData = {
          type: "password",
          temporary: false,
          value: data.password,
        };

        console.log(passwordData);

        await server.put(
          `admin/realms/10000/users/${userId}/reset-password`,
          passwordData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        await server.put(
          `admin/realms/10000/users/${userId}`,
          {
            requiredActions: ["VERIFY_EMAIL"],
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        await server.put(
          `admin/realms/10000/users/${userId}/send-verify-email`,
          null,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        const groupsResponse = await server.get(`admin/realms/10000/groups`, {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        });
        const groups = groupsResponse.data;
        const groupsToAdd = ["Api Readers", "Api Writers"];
        const addGroupsPromises = [];

        groupsToAdd.forEach((groupName) => {
          const group = groups.find(
            (g: { id: string; name: string }) => g.name === groupName
          );

          if (group) {
            const groupId = group.id;
            addGroupsPromises.push(
              server.put(
                `admin/realms/10000/users/${userId}/groups/${groupId}`,
                {},
                {
                  headers: {
                    Authorization: token,
                    "Content-Type": "application/json",
                  },
                }
              )
            );
          }
        });

        await Promise.all(addGroupsPromises);
        toast.success("SUA CONTA FOI CADASTRADA", {
          description: "Aguarde, você será redirecionado em instantes ...",
        });
        navigate("/dashboard");
      }
    } catch (error: any) {
      if (error?.response && error?.response.status === 409) {
        toast.error("O EMAIL DIGITADO JÁ ESTÁ EM USO", {
          description:
            "Este e-mail já está em uso. Se você esqueceu a sua senha, clique em fazer login e redefina a senha.",
        });
      } else {
        toast.error("ERRO AO CADASTRAR SUA CONTA", {
          description:
            "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8">
        <Progress className="w-[85%]" value={(currentStep / 4) * 100} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <div className="px-2">
            <PersonFormRegister
              register={register}
              control={control}
              errors={errors}
            />
            <div className="mt-10 flex justify-end">
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className="px-2">
            <AddressFormRegister
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
            <div className="mt-10 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(1)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className="px-2">
            <AccountFormRegister register={register} errors={errors} />
            <div className="mt-10 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(2)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button onClick={handleNext}>Próximo</Button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div className="px-2">
            <ConfirmationFormRegister formData={formData} />
            <div className="mt-16 flex justify-between">
              <Button
                className="inline-flex items-center gap-2 bg-transparent text-black shadow-none hover:text-primary-orange hover:bg-transparent"
                onClick={() => setCurrentStep(3)}
              >
                <ArrowLeftIcon className="size-4" />
                Voltar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 hover:bg-primary-orange hover:text-black"
              >
                {isSubmitting && (
                  <>
                    <span>Processando</span>
                    <ReloadIcon className="size-4 animate-spin" />
                  </>
                )}
                {!isSubmitting && (
                  <>
                    <span>Finalizar cadastro</span>
                    <CheckCircleIcon className="size-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
