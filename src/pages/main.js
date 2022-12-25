import {Modal,Button,Card,Form} from "react-bootstrap";
import {useState,useEffect} from "react";
import analize from "../helper/fuzzy";

export default function Main(){
    const [show,setShow] = useState(false);
    const [resShow,setResShow] = useState(false);
    const [step,setStep] = useState(1);
    const [obesityLevel,setObesityLevel] = useState(10);
    const [bloodPressureLevel,setBloodPressureLevel] = useState(10);
    const [heredityLevel,setHeredityLevel] = useState(10);
    const [result,setResult] = useState(0);

    const LowRisk = ()=>{

        return (
            <div style={{width:"100%"}}>
                <h1 className="text-center text-success">LOW</h1>
            </div>  
        )
    }

    const MidRisk = ()=>{

        return (
            <div style={{width:"100%"}}>
                <h1 className="text-center text-warning">AVERAGE</h1>
            </div>  
        )
    }

    const HighRisk = ()=>{

        return (
            <div style={{width:"100%"}}>
                <h1 className="text-center text-danger">HIGH</h1>
            </div>  
        )
    }

    const handleSubmit = ()=>{
        setShow(false);
        setStep(1);
        console.log(obesityLevel,heredityLevel,bloodPressureLevel)
        const res = analize(obesityLevel,heredityLevel,bloodPressureLevel);
        setResult(res);
        setTimeout(()=>setResShow(true),1500);
    }  


    return(
        <>
            <div style={{minHeight:"90vh",background:"linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.3)),url('/doctor.jpg')",backgroundSize:"cover"}}>
                <div style={{height:"50vh"}}>
                        <div className="container text-light d-flex justify-content-center flex-column" style={{height:"100%"}}>
                            <h1 className="d-1 text-center">Heart Disease Prediction <br/>and Diagnosis system</h1>
                            <p className="lead text-center">
                            Get access to quick and easy diagnosis <br/> for your heart 
                            </p>
                        </div>
                </div>
                <div className="container text-center" style={{width:"100%"}}>
                    <Button style={{backgroundColor:"#ef0a20"}} onClick={()=>setShow(true)} className="border-0 text-light btn-lg">
                        Run a Diagnostic Test
                    </Button>
                </div>
            </div>
            <Modal size="md" centered={true} show={show}  onHide={()=>setShow(false)} style={{width:"100vw"}}>
                <Modal.Body className="rounded-0" style={{width:"100%"}}>
                    <Card className="rounded-0" >
                        <Card.Header className="fw-bold text-danger mb-3 text-center">Select a range that suits your symptoms</Card.Header>
                        <Card.Body style={{width:"100%"}}>
                            <div>
                                <div className="mb-3 text-center">
                                <p className="text-center fw-bold">STEP {step}</p>
                                </div>
                                <Form>
                                    <div className={`${step == 1? "d-block":"d-none"}`}>
                                        <div className={` d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="weight"> <span className="fw-bold">1. How much do you weigh?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check onClick={()=>setObesityLevel(7)} inline label="90 - 110 pounds" name="w" type="radio"/>
                                                <Form.Check onClick={()=>setObesityLevel(8)} inline label="110 - 130 pounds" name="w" type="radio"/>
                                                <Form.Check onClick={()=>setObesityLevel(12)} inline label="130 - 170 pounds" name="w" type="radio"/>
                                            </div>
                                        </div>

                                        <div className={`d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="jp"> <span className="fw-bold">2. Do you experience joint pain?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check inline label="Once in a while" onClick={()=>setObesityLevel(obesityLevel < 11? obesityLevel + 5 : obesityLevel + 2)} name="jp" type="radio"/>
                                                <Form.Check inline label="Very often" onClick={()=>setObesityLevel(obesityLevel + 5)} name="jp" type="radio"/>
                                                <Form.Check inline label="Not so often" onClick={()=>setObesityLevel(obesityLevel + 3)} name="jp" type="radio"/>
                                            </div>
                                    </div>
                                    </div>
                                        {/* STEP 2 */}
                                    <div className={`${step == 2? "d-block":"d-none"}`}>
                                        <div className={` d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="family"> <span className="fw-bold">1. Has anyone in your immediate family been diagnosed with a Heart Disease?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check onClick={()=>setHeredityLevel(12)} inline label="Yes" name="family" type="radio"/>
                                                <Form.Check onClick={()=>setHeredityLevel(heredityLevel <10 ? 15:13)} inline label="No" name="family" type="radio"/>
                                            </div>
                                        </div>

                                        <div className={`d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="jp"> <span className="fw-bold">2. Has anyone in your extended family been diagnosed with a Heart Disease?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check onClick={()=>setHeredityLevel(+(heredityLevel < 13 && (heredityLevel + (13 - heredityLevel))))} inline label="Yes" name="extended" type="radio"/>
                                                <Form.Check inline label="No" onClick={()=>setHeredityLevel(heredityLevel + 1)} name="extended" type="radio"/>
                                            </div>
                                    </div>
                                    </div>

                                    {/* STEP 3 */}
                                    <div className={`${step == 3? "d-block":"d-none"}`}>
                                        <div className={` d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="nasal"> <span className="fw-bold">1. Do you experience Nose bleeds?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check onClick={()=>setBloodPressureLevel(bloodPressureLevel <= 20 ? bloodPressureLevel + 10 : bloodPressureLevel)} inline label="Yes" name="nasal" type="radio"/>
                                                <Form.Check inline onClick={()=>setBloodPressureLevel(bloodPressureLevel < 20 ? bloodPressureLevel : bloodPressureLevel - 5)} label="No" name="nasal" type="radio"/>
                                            </div>
                                        </div>

                                        <div className={`d-flex flex-column gap-2 mb-3`}>
                                            <Form.Label htmlFor="jp"> <span className="fw-bold">2. Do you experience Dizziness?</span></Form.Label>
                                            <div className="d-flex flex-column">
                                                <Form.Check onClick={()=>setBloodPressureLevel(bloodPressureLevel + (13-bloodPressureLevel))} inline label="Yes" name="dizziness" type="radio"/>
                                                <Form.Check onClick={()=>setBloodPressureLevel(bloodPressureLevel + (13-bloodPressureLevel))} inline label="No" name="dizziness" type="radio"/>
                                            </div>
                                    </div>
                                    </div>
                                    <div className="d-flex gap-4 text-center mt-4" style={{width:"100%"}}>
                                        <Button className={`${step==1?"d-none":"d-block"}`} onClick={()=>setStep(+(step - 1))}>Prev</Button>
                                        <Button className={`${step==3?"d-none":"d-block"}`} onClick={()=>setStep(+(step + 1))}>
                                            Next
                                        </Button>
                                    </div>
                                    <div className={`${step==3?"d-block":"d-none"} mt-4 text-center`} style={{width:"100%"}}>
                                        <Button className="shadow-lg btn-lg btn-success" onClick={()=>handleSubmit()}>
                                            Submit Result
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
            <Modal centered={true} show={resShow} onHide={()=>setResShow(false)}>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <div className="text-center">
                                <div className="d-flex rounded-circle justify-content-center align-items-center" style={{height:"10em",width:"100%"}}>
                                    <img src="/heart1.jpeg" className="img-circle" style={{height:"7em",width:"7em"}} />
                                </div>
                                    <span>Your Risk of Heart Disease is :</span> 
                                    {
                                        (
                                            function(){
                                                if(result <= 4){
                                                    return <LowRisk/>
                                                }
                                                if(result <=7){
                                                    return <MidRisk/>
                                                }
                                                if(result <= 20){
                                                    return <HighRisk/>
                                                }
                                            }
                                        )()
                                    }
                            </div>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    )
}