export default function Header() {
  const menus = [
    {
      name: "Login",
      href: "/login",
    },
  ];

  return (
    <div class="container items-center mx-auto bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4 border-b">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">The Fresh Blog</div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map(menu => (
          <li>
            <a
              href={menu.href}
              class="text-gray-500 hover:text-gray-700 py-1 border-gray-500 hover:font-bold hover:border-b-2"
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
