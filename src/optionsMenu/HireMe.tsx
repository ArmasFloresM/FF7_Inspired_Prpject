export function HireMe() {
  return (
    <div className="flex justify-center p-5 h-auto  border border-green-600 w-full ">
      <form action="" className="gap-3 flex flex-col items-center">
        <div className="flex flex-shrink-0 gap-1 ">
          <input
            className="border rounded-xl flex px-2 py-1 w-40"
            type="text"
            placeholder="Your name"
          />
          <input
            className="border rounded-xl flex px-2 py-1 w-40"
            type="text"
            placeholder="phone"
          />
        
        </div>
        <input
            className="border rounded-xl flex px-2 py-1"
            type="text"
            placeholder="E-mail"
          />

          
        <input
          className="border rounded-xl flex px-2 py-1"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border rounded-xl flex px-2 py-1 resize-none h-20"
          placeholder="Your message"
          defaultValue=""
        />
        <button className="border w-fit py-1 px-2 rounded-xl">Enviar</button>
      </form>
    </div>
  );
}
