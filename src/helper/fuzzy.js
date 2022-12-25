import { FuzzySet,FuzzyInferenceSystem,LinguisticVariable,DefuzzicationType } from "javascript-fuzzylogic";


// fuzzy sets
const lowObesity = new FuzzySet("lowObesity");
const averageObesity = new FuzzySet("averageObesity");
const highObesity = new FuzzySet("highObesity");
const lowBloodPressure = new FuzzySet("lowBloodPressure");
const averageBloodPressure = new FuzzySet("averageBloodPressure");
const highBloodPressure = new FuzzySet("highBloodPressure");
const hereditary = new FuzzySet("hereditary");
const averageHereditary = new FuzzySet("averageHereditary");
const notHereditary = new FuzzySet("notHereditary");

const lowRisk = new FuzzySet("lowRisk");
const midRisk = new FuzzySet("midRisk");
const highRisk = new FuzzySet("highRisk");


// fuzzy values
lowRisk.generateMembershipValues({
    type:"Triangular",
    parameters: {
        left: 2,
        center: 6,
        right: 8,
        minValue: 0,
        maxValue:20,
        step: 1,
    }
});

midRisk.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:50,
        step:1
    }
});

highRisk.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:22,
        center:26,
        right:28,
        minValue:20,
        maxValue:100,
        step:1
}
});



lowObesity.generateMembershipValues({
    type:"Triangular",
    parameters: {
        left: 2,
        center: 6,
        right: 8,
        minValue: 0,
        maxValue:50,
        step: 1,
    }
});

averageObesity.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:50,
        step:1
    }
});

highObesity.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:50,
        step:1
    }
});

lowBloodPressure.generateMembershipValues({
    type:"Triangular",
    parameters: {
        left: 2,
        center: 6,
        right: 8,
        minValue: 0,
        maxValue:50,
        step: 1,
    }
});

averageBloodPressure.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:50,
        step:1
    }
});

highBloodPressure.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:50,
        step:1
    }
});

 hereditary.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:17,
        center:50,
        right:80,
        minValue:10,
        maxValue:100,
        step:1
    }
});

averageHereditary.generateMembershipValues({
    type:"Triangular",
    parameters:{
        left:12,
        center:16,
        right:18,
        minValue:10,
        maxValue:100,
        step:1
    }
});

notHereditary.generateMembershipValues({
    type:"Triangular",
    parameters: {
        left: 10,
        center: 20,
        right: 38,
        minValue: 0,
        maxValue:100,
        step: 1,
    }
});


// linguistic variable
const obesityVariable = new LinguisticVariable("obesity").addSet(highObesity).addSet(lowObesity).addSet(averageObesity);
const bloodPressureVariable = new LinguisticVariable("bloodPressure").addSet(highBloodPressure).addSet(lowBloodPressure).addSet(averageBloodPressure);
const hereditaryVarible = new LinguisticVariable("heredity").addSet(hereditary).addSet(notHereditary).addSet(averageHereditary);
const riskVariable = new LinguisticVariable("risk").addSet(lowRisk).addSet(midRisk).addSet(highRisk);


// Defining the inference system
const HeartDiagnosisFIS = new FuzzyInferenceSystem("Heart-Disease").addInput(obesityVariable).addInput(bloodPressureVariable).addInput(hereditaryVarible).addOutput(riskVariable);


// Rules
HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS notHereditary AND bloodPressure IS highBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS averageHereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS hereditary AND bloodPressure IS highBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS averageHereditary AND bloodPressure IS lowBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS averageHereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS notHereditary AND bloodPressure IS lowBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS averageHereditary AND bloodPressure IS highBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS notHereditary AND bloodPressure IS highBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS hereditary AND bloodPressure IS highBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS hereditary AND bloodPressure IS highBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS hereditary AND bloodPressure IS lowBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS hereditary AND bloodPressure IS averageBloodPressure THEN risk IS highRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS notHereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS averageHereditary AND bloodPressure IS lowBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS averageHereditary AND bloodPressure IS highBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS hereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS averageHereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS notHereditary AND bloodPressure IS lowBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS notHereditary AND bloodPressure IS averageBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS hereditary AND bloodPressure IS lowBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS notHereditary AND bloodPressure IS lowBloodPressure THEN risk IS lowRisk");

HeartDiagnosisFIS.addRule("IF obesity IS lowObesity AND heredity IS averageHereditary AND bloodPressure IS highBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS averageHereditary AND bloodPressure IS lowBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS notHereditary AND bloodPressure IS highBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS averageObesity AND heredity IS hereditary AND bloodPressure IS lowBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS notHereditary AND bloodPressure IS averageBloodPressure THEN risk IS midRisk");

HeartDiagnosisFIS.addRule("IF obesity IS highObesity AND heredity IS averageHereditary AND bloodPressure IS lowBloodPressure THEN risk IS midRisk");


export default function analize(obesityValue,heredityValue,bloodPressureValue){
const result = HeartDiagnosisFIS.solve("Mamdani",{obesity:obesityValue,heredity:heredityValue,bloodPressure:bloodPressureValue},DefuzzicationType.LargestOfMaxima);
console.log(result);
return result;
}
