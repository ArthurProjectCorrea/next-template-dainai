export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10 overflow-hidden">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/login-background.jpg)',
        }}
      />

      {/* Overlay com efeito vidro fosco */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/30 z-10" />

      {/* Conteúdo */}
      <div className="relative z-20 w-full max-w-sm">{children}</div>
    </div>
  );
}
