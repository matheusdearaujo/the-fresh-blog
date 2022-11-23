export default function Card() {
  return (
    <div class="pb-10 px-10 flex flex-col justify-center gap-6 md:flex-row">
      <div class="max-w-sm max-w-full lg:flex">
        <div class="border border-gray-400 lg:border-gray-400 bg-white rounded-b lg:rounded-b-none rounded p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="flex items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="http://cbissn.ibict.br/index.php/imagens/1-galeria-de-imagens-01/detail/3-imagem-3-titulo-com-ate-45-caracteres?tmpl=component&phocadownload=1"
              alt="Avatar of Jonathan Reinink"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Jonathan Reinink</p>
              <p class="text-gray-600">Aug 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
