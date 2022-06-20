const Home = () => {
  return (
    <div className="pt-16 flex flex-col gap-16 justify-center items-center font-Outfit">
      <h2 className="text-accent-200 text-4xl  font-semibold mt-4">
        Welcome to Lifeline
      </h2>

      <p className="font-Outfit text-xl px-4 md:px-16 md:mx-16 text-center bg-gray-100 py-8 border-4 rounded-xl border-gray-200">
        Donating blood is one of the greatest ways to help humankind. By doing
        so, we save someone’s precious life, and that is a blessing in itself.
        There are people who hesitate to donate blood if they aren’t given
        monetary returns or because of the various myths surrounding it.
      </p>

      <div className="flex flex-col">
        <cite className="text-center text-lg">
          "Remember that the happiest people are not those getting more, but
          those giving more. "
        </cite>
        <span className="text-center bg-accent-50 bg-opacity-25 text-accent-200 m-4 md:mx-44">
          - H. Jackson Brown Jr.
        </span>
      </div>
    </div>
  );
};

export default Home;
