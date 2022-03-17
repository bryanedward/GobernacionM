import React from 'react'
import { useFieldArray, useForm } from "react-hook-form";


export const CircuitoScreen = () => {
    const { control, register, handleSubmit, formState: { errors } } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'circuito'
    })
    const onSubmit = (data) => { console.log(data) };

    const agregarCamposForm = () => append({
        departamento: '', descripcion: '', marca: '', modelo: '', macAddress: '', ipAddress: '',
        numSerie: ''
    })

    const eliminarCampForm = () => remove(fields.length - 1)

    return (
        <div>
            <div className='heroBackground'>
                <div className="connectividad__header_container">
                    <h3>CIRCUITO CERRADO CCTV</h3>
                    <h4>Ficha N.:#3</h4>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="connectividad__table_container">
                        <div className="connectividad__header_table_container">
                            <h4>Departamento</h4>
                            <h4>Descripcion</h4>
                            <h4>Marca</h4>
                            <h4>Modelo</h4>
                            <h4>MAC Address</h4>
                            <h4>IP Address</h4>
                            <h4>Num.Serie</h4>
                        </div>
                        <div>
                            {
                                fields.map((field, index) => (
                                    //TODO: implementacion de los inputs del form
                                    <div className="connectividad__table_row" key={field.id}>
                                        <input id="departamento" type="text" {...register(`circuito.${index}.departamento`, { required: true })} />
                                        <input id="descripcion" type="text" {...register(`circuito.${index}.descripcion`, { required: true })} />
                                        <input id="marca" type="text" {...register(`circuito${index}.marca`, { required: true })} />
                                        <input id="modelo" type="text" {...register(`circuito${index}.modelo`, { required: true })} />
                                        <input id="macAddress" type="text" {...register(`circuito${index}.macAddress`, { required: true })} />
                                        <input id="ipAddress" type="text" {...register(`circuito${index}.ipAddress`, { required: true })} />
                                        <input id="numSerie" type="text" {...register(`circuito${index}.numSerie`, { required: true })} />
                                    </div>
                                ))
                            }
                            <div className="connectividad__table_submit_container">
                                {/* TODO: botones para agregar campos y eliminar */}
                                <input className="primaryBtn" value="+" type="submit" onClick={agregarCamposForm} />
                                <input className="primaryBtn" value="-" type="submit" onClick={eliminarCampForm} />
                            </div>
                        </div>
                        <div className="connectividad__observaciones_container">
                            <h4>Observaciones:</h4>
                            <div className='connectividad__textarea_container'>
                                <textarea placeholder="Anadir observacion..."></textarea>
                            </div>
                        </div>
                        <div className="connectividad__inputsContainer">
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="user">Usuario:</label>
                                <input id="user" type="text" {...register("user", { required: true })} />
                            </div>
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="tecnico">Tecnico:</label>
                                <input id="tecnico" type="text" {...register("tecnico", { required: true })} />
                            </div>
                            <div className='connectividad__inputContainer'>
                                <label htmlFor="jefeSistema">Jefe de sistema</label>
                                <input id="jefeSistema" type="text" {...register("jefeSistema", { required: true })} />
                            </div>
                        </div>

                        <div className="connectividad__btnContainer">
                            <input className="primaryBtn" value="Guardar" type="submit" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
