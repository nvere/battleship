import './Laser.scss';


function Laser(props) {
    return (

        <section className="laser" style={{left: props.pos -25 + '%', backgroundColor:"red",  width:'30px', height: '30px', position: 'absolute', top:"-30px"}}>
        </section>
     
    )
}

export default Laser