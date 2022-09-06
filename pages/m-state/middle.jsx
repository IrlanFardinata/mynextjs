import {createContext, useState, useContext}  from 'react';

const mahasiswa   = createContext();
const fakultas    = createContext();
const prodi       = createContext();

// komponen Induk
const Index = () =>{

    const [mhs, setMhs]         = useState('Madan');
    const changeMahasiswa       = e => setMhs(e.target.value);
    const mhsState              = {mhs, changeMahasiswa};

    const [fks, setFakultas]    = useState("kdi");
    const changeFakultas        = e => setFakultas(e.target.value);
    const fakultasState         = {fks, changeFakultas};

    const [prod, setProdi]     = useState("kdi");
    const changeProdi           = e => setProdi(e.target.value);
    const prodiState            = {prod, changeProdi};

    return(
        <mahasiswa.Provider value={mhsState}>
            <fakultas.Provider value={fakultasState}>
                <prodi.Provider value={prodiState}>
                    <h2>Basic Management State Menggunakan Hooks React</h2>
                    <div className="grid grid-flow-row auto-rows-max">
                        <Mahasiswa/>
                        <Fakultas/>
                        <Prodi/>
                        <Card/>
                    </div>
                </prodi.Provider>
            </fakultas.Provider>
        </mahasiswa.Provider>
    )
}

    const Mahasiswa = () =>{
        const props = useContext(mahasiswa);
        return(
            <>
                <div className="m-3">
                    <label className="mr-2"> Pilih Mahasiswa</label>
                    <select className="select select-accent w-full max-w-xs" value={props.mhs} onChange={props.changeMahasiswa}>
                        <option value={"Ramadhansyah"}>Ramadhansyah</option>
                        <option value={"Kadarisman"}>Kadarisman</option>
                        <option value={"Irland"}>Irland</option>
                        <option value={"Muhammad Riski"}>Muhammad Riski</option>
                    </select>
                </div>
            </>
        )
    }

    const Fakultas = () =>{
        const props = useContext(fakultas);
        return(
            <>
                <div className="m-3">
                    <label className="mr-2"> Pilih Fakultas</label>
                    <select className="select select-accent w-full max-w-xs" value={props.fks} onChange={props.changeFakultas}>
                        <option value={"Fakultas Hukum"}>Fakultas Hukum</option>
                        <option value={"Fakultas FKIP"}>Fakultas FKIP</option>
                        <option value={"Fakultas Kesehatan"}>Fakultas Kesehatan</option>
                        <option value={"Fakultas Teknik"}>Fakultas Teknik</option>
                    </select>
                </div>
            </>
        )
    }

    const Prodi = () =>{
        const props = useContext(prodi);
        return(
            <>
                <div className="m-3">
                    <label className="mr-2"> Pilih Prodi</label>
                    <select className="select select-accent w-full max-w-xs" value={props.prod} onChange={props.changeProdi} >
                        <option value={"Sistem Informasi"}>Sistem Informasi</option>
                        <option value={"Tukang Parkir"}>Tukang Parkir</option>
                        <option value={"Farmasi"}>Farmasi</option>
                    </select>
                </div>
            </>
        )

    }

    const Card = () =>{
        const props   = useContext(mahasiswa);
        const fak     = useContext(fakultas);
        const pr      = useContext(prodi);

        return(
            <>
                <div className="pl-10">
                    <h2>Hasil Pilihan Anda</h2>
                    <h4>Mahasiswa : {props.mhs}</h4><br/>
                    <h4>Fakultas : {fak.fks}</h4><br/>
                    <h4>Prodi : {pr.prod}</h4><br/>
                </div>
            </>
        )
    }

export default Index;