export default function ModalidadVirtual() {
  return (
    <>
      <section className="min-h-screen bg-gray-500 text-center flex justify-center items-center">
        {/* MENSAJE */}
        <h1 className="text-xl lg:text-3xll font-bold text-white p-4">
          EN MANTENIMIENTO
        </h1>

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </section>
    </>
  );
}
