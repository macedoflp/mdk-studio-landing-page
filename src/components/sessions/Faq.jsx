import React, { useState } from 'react';
import fundo from '../../assets/fundosobre.png';

const Faq = () => {
  // Estado para armazenar o índice do item aberto
  const [openIndex, setOpenIndex] = useState(null);

  // Função para lidar com o clique em um item
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Dados das perguntas frequentes
  const faqs = [
    {
      question: 'Quanto custa para construir um site?',
      answer: 'O custo depende de vários fatores, incluindo a complexidade do projeto, o número de páginas, e as funcionalidades específicas necessárias. Oferecemos orçamentos personalizados baseados nas suas necessidades e requisitos.',
    },
    {
      question: 'Como posso atualizar o conteúdo do meu site depois que finalizado?',
      answer: 'Fornecemos treinamento básico para que você possa gerenciar e modificar textos, imagens e outros elementos do site. Se preferir, também podemos realizar atualizações para você, conforme necessário.',
    },
    {
      question: 'Vocês podem me ajudar a escolher um nome de domínio?',
      answer: 'Sim, podemos ajudar você a escolher um nome de domínio. Vamos considerar fatores como a relevância para o seu negócio, facilidade de lembrar, e disponibilidade. Oferecemos orientações e sugestões para encontrar um nome que se encaixe bem com a identidade da sua marca e esteja disponível para registro.',
    },
    {
      question: 'Quanto tempo leva para o meu site ficar pronto?',
      answer: 'O prazo pode variar dependendo da complexidade do projeto, mas geralmente, o desenvolvimento de um site simples leva entre 2 a 3 semanas. Projetos mais complexos, como aplicações web ou sites com funcionalidades avançadas, podem levar mais tempo.',
    },
    {
      question: 'Vocês oferecem suporte técnico após o lançamento do site?',
      answer: 'Sim, oferecemos suporte técnico após o lançamento do site. Isso inclui correção de problemas, atualizações de segurança, ajustes necessários e orientação sobre como gerenciar o conteúdo. Estamos aqui para garantir que seu site continue funcionando bem e atender às suas necessidades.',
    },
    {
      question: 'Vocês oferecem serviços de hospedagem?',
      answer: 'Oferecemos recomendações para serviços de hospedagem e podemos ajudar a configurar o ambiente de hospedagem, mas não fornecemos serviços de hospedagem diretamente.',
    },
    {
      question: 'Como posso entrar em contato para um orçamento ou consulta?',
      answer: 'Você pode entrar em contato conosco através do formulário de contato em nosso site, por e-mail, ou telefonicamente. Estamos à disposição para discutir suas necessidades e fornecer um orçamento personalizado.',
    },
  ];

  return (
    <>
      <div id="FAQ" className="bg-black inset-0 bg-cover object-cover relative object-center bg-center h-screen">
        <div className="relative z-10">
          <section className="text-gray-100 py-32 min-h-screen">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
              <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Perguntas frequentes</h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <summary
                      className="py-2 outline-none cursor-pointer focus:underline"
                      onClick={() => handleClick(index)}
                    >
                      {faq.question}
                    </summary>
                    {openIndex === index && (
                      <div className="px-4 pb-4">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <hr class="h-px mt-64 bg-gray-200 border-0 dark:bg-gray-700 relative"></hr>
          </section>
        </div>
      </div>
    </>
  );
};

export default Faq;
