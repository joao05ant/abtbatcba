// index.tsx

import Header from "../components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />

      {/* Conteúdo principal da página */}
      <main className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Aqui você encontrará algumas informações sobre as top batalhas de rima
          de Cuiabá
        </h1>

        {/* Exemplo de uso da fonte em um parágrafo */}
        <p className="font-permanent-marker text-lg text-center mb-12">
          Isso aqui é só um teste
        </p>

        {/* Exemplo de seção */}
        <section className="my-16 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Seção 1</h2>
            <div className="flex items-center justify-center">
              <Image
                src="/favicon.ico" // Substitua com o caminho da sua imagem
                alt="Descrição da imagem 1"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquet justo ut efficitur. Fusce eu erat nunc. Donec id dapibus
              augue, ac scelerisque sem.
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé da página */}
      <footer className="w-full h-24 flex items-center justify-center  text-white">
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
