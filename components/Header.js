import React, { useContext } from "react";
import Link from "next/link";

const categories = [
  { name: "React", slug: "react" },
  { name: "Web Dev", slug: "web-dev" },
  { name: "Graph CMS", slug: "graph-cms" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Inventions Media
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, i) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mr-2 ml-4 font-semibold align-middle cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
