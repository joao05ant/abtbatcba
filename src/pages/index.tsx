import Header from "../components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header />

      {/* Conteúdo principal da página */}
      <main className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4">
        <h1 className="text-3xl md:text-5xl text-center mb-8">
          Aqui você encontrará algumas informações sobre as batalhas de rima de Cuiabá
        </h1>

        {/* Exemplo de uso da fonte em um parágrafo */}
        <p className="font-permanent-marker text-lg text-center mb-12">
          Isso aqui é só um teste
        </p>

        {/* Seção 1 */}
        <section className="my-16 w-full">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Batalha da Alencastro</h2>
            <div className="flex items-center justify-center">
              <Image
                src="/bda.jpg" // Caminho da Img
                alt="Descrição da imagem 1"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
            <p className="mt-4 text-lg text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet justo ut efficitur. Fusce eu erat nunc. Donec id dapibus augue, ac scelerisque sem.
            </p>
            <div className="flex justify-center mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31670.23679989548!2d-56.0853158!3d-15.6014104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939d2be4be5275e7%3A0x9e1d52e7f3e14b71!2sPra%C3%A7a%20Alencastro%2C%20Cuiab%C3%A1%20-%20MT%2C%2078005-000!5e0!3m2!1spt-BR!2sbr!4v1629729058265!5m2!1spt-BR!2sbr"
                width="300"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Rodapé da página */}
      <footer className="w-full h-24 flex items-center justify-center text-white">
        <p>© 2024 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
