export function wrapPromise(promise) {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender; // Suspende el componente mientras se resuelve la promesa
      } else if (status === "error") {
        throw result; // Maneja errores
      } else if (status === "success") {
        return result; // Retorna los datos cuando la promesa se resuelve
      }
    },
  };
}
