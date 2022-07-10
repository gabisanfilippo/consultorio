import React, { useEffect, useState } from "react";
import api from "../../services/api";

import ButtonDefault from '../ButtonDefault'
import SelectDefault from "../SelectDefault";

export default function Menu(){
    const [patientsWithAppointments, setPatientsWithAppointments] = useState([])
    const [optionsPatients, setOptionsPatients] = useState([]) 

    useEffect(()=>{
        getPatientsList()
    },[])

    useEffect(()=>{
        getOptionsPatients()
    },[patientsWithAppointments])

    async function getPatientsList(){
        const allPatient = await api.get('pacientes')
        const allAppointment = await api.get('consultas')
        setPatientsWithAppointments([])

        allAppointment.data.map((elementAppointment)=>{
            allPatient.data.map((elementPatient)=>{
                if(elementAppointment.patient_id == elementPatient.id){
                    if(patientsWithAppointments.indexOf(elementPatient) == -1){
                        setPatientsWithAppointments(oldArray => [...oldArray, elementPatient])
                    }
                }
            })
        })
    }

    function getOptionsPatients(){
        if(patientsWithAppointments){
            setOptionsPatients([])
            patientsWithAppointments.map((element)=>{
                let patient = {value: element.name, label: element.name}
                setOptionsPatients(oldArray => [...oldArray, patient]) 
            })
        }
    }


    return(
        <>
            <div>
                <ButtonDefault
                    text={'Cadastrar consulta'}
                    typeButton={'cadastroConsulta'}
                />
            </div>
            <div>
                <p>Filtrar por:</p>
                <div>
                    <SelectDefault
                        options={optionsPatients}
                    />
                    <SelectDefault

                    />
                </div>
            </div>
        </>
    )
}