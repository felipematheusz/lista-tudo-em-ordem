"use client";

import { IconWhatsapp } from "@/components/magicui/IconWhatsapp";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  // Link do WhatsApp (pode personalizar o número e mensagem)
  const whatsappLink = "https://chat.whatsapp.com/EnTcwrffIpO8arD5zW20Mt";

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-muted/60 to-secondary/40 px-2">
      <Card className="w-full max-w-sm shadow-xl rounded-2xl backdrop-blur-md bg-white/70 border-none">
        <CardHeader className="flex flex-col items-center gap-2 pb-0">
          <Image
            src="/logo-tudo-em-ordem.svg"
            alt="Logo Tudo em Ordem"
            width={120}
            height={120}
            className="object-contain mb-2"
            priority
          />
          <CardTitle className="text-center text-2xl font-semibold tracking-tight text-primary">
            Garanta seu Acesso Exclusivo
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5 items-center pt-0">
          <p className="text-base text-muted-foreground text-center leading-relaxed">
            Faça parte do grupo seleto que terá acesso antecipado ao{" "}
            <span className="font-semibold text-primary">Tudo em Ordem</span>!
            <br />
            Entre na lista de espera e garanta uma condição{" "}
            <span className="font-bold text-[#3972EC]">
              exclusiva com mega desconto
            </span>{" "}
            de lançamento.
          </p>

          <RainbowButton className="w-full h-10">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entrar na lista de espera pelo WhatsApp"
              className="flex items-center justify-center gap-2 w-full h-full"
            >
              <IconWhatsapp className="w-5 h-5" />
              Entrar na lista pelo WhatsApp
            </a>
          </RainbowButton>
          <span className="text-xs text-center text-muted-foreground mt-1">
            Oferta especial para quem entrar agora. Vagas limitadas!
          </span>
        </CardContent>
      </Card>
    </main>
  );
}
