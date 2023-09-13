function MensajeForm({nombre, resp}) {
    if (resp === 1) {
        return (
            <h3>Gracias {nombre}, te contactaremos cuanto antes via mail.</h3>
        )
    } else if (resp === -1) {
        return (
            <h3>Por favor verifique su informacion nuevamente</h3>
        )
    } else {
        return (
            <></>
        )
    }
}

export default MensajeForm;