import { IMAGES } from "@/constants/images";
import { ArrowUpRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function CertificationsSection() {
  return (
    <section>
      <div className="max-w-lg sm:max-w-xl space-y-4 mx-auto text-center scroll-mt-40" id="certifications">
        <Badge variant="secondary" className="relative">
          <span className="bg-white rounded-full size-5 flex items-center justify-center px-px">
            <Flame className="text-black fill-black" />
          </span>
          <span className="absolute left-0 right-0 -top-3 -z-1 mx-auto blur-sm h-8 w-12 bg-amber-500/20 animate-pulse" />
          Certificações
        </Badge>

        <h1 className="text-2xl font-light sm:text-4xl">
          O que me <span className="italic text-yellow-600">certifica?</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light sm:text-base">
          Aqui encontra-se o que me torna diferente e o que comprova as minha habilidades e minhas qualificações.
        </p>
      </div>
      <section className="flex flex-wrap justify-center gap-4 my-8">
        <div className="relative rounded-[1.25rem] border overflow-hidden flex-1 min-w-75 max-w-90 p-6 text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="flex items-center justify-between border-b pb-4 gap-4">
            <div className="flex items-center gap-4">
              <h4>AWS Academy</h4>
              <Badge variant="secondary" className="h-6 px-2">
                29/08/2023
              </Badge>
            </div>
            <Button size="icon" variant="outline" className="size-8" asChild>
              <Link to="https://www.credly.com/badges/39168fc5-ea2b-4256-93a0-edc319803d64/public_url" target="_blank">
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <img
            src={IMAGES.AwsFoundationsCertificate}
            alt="AWS - Fundamentos"
            className="w-32 mx-auto my-4"
          />
          <p className="text-xs sm:text-sm text-center">
            Graduado da AWS Academy - Fundamentos de Nuvem da AWS Academy
          </p>
          <p className="text-center mt-1 text-amber-500">CLF-C01</p>
        </div>
        <div className="relative rounded-[1.25rem] border overflow-hidden flex-1 min-w-75 max-w-90 p-6 text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <h4>Microsoft</h4>
              <Badge variant="secondary" className="h-6 px-2">
                27/10/2023
              </Badge>
            </div>
            <Button size="icon" variant="outline" className="size-8" asChild>
              <Link to="https://www.credly.com/badges/93bdf7e2-620f-4f68-9719-7490ddde7a98/public_url" target="_blank">
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <img
            src={IMAGES.AzureFundamentalsCertificate}
            alt="Fundamentos do Azure"
            className="w-32 mx-auto my-4"
          />
          <p className="text-xs sm:text-sm text-center">
            Certificado pela Microsoft - Fundamentos do Azure
          </p>
          <p className="text-center mt-1 text-amber-500">AZ-900</p>
        </div>
        <div className="relative rounded-[1.25rem] border overflow-hidden flex-1 min-w-75 max-w-90 p-6 text-primary/90">
          <span className="absolute left-8 right-0 -top-3 -z-1 blur-sm h-8 w-12 bg-amber-500/30 animate-pulse" />
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <h4>Microsoft</h4>
              <Badge variant="secondary" className="h-6 px-2">
                21/11/2023
              </Badge>
            </div>
            <Button size="icon" variant="outline" className="size-8" asChild>
              <Link to="https://www.credly.com/badges/d2e817ab-4ad4-48c6-9774-f3f9f639e4bb/public_url" target="_blank">
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <img
            src={IMAGES.AzureSecurityCertificate}
            alt="Fundamentos de Segurança, Conformidade e Identidade"
            className="w-32 mx-auto my-4"
          />
          <p className="text-xs sm:text-sm text-center">
            Certificado pela Microsoft - Fundamentos de Segurança, Conformidade
            e Identidade
          </p>
          <p className="text-center mt-1 text-amber-500">SC-900</p>
        </div>
      </section>
      <Button variant="outline" asChild className="w-fit mx-auto flex">
        <Link
          to="https://www.credly.com/users/lucas-de-oliviera-rubia"
          target="_blank"
        >
          Ver todas certificações
        </Link>
      </Button>
    </section>
  );
}
