import './App.css'
import FormContainer from './Components/FormContainer/FormContainer'
import InputDate from './Components/Inputs/InputDate'
import InputButton from './Components/InputButton/InputButton'
import InputText from './Components/Inputs/InputText'
import MainContainer from './Components/MainContainer/MainContainer'
import QuestionLabel from './Components/QuestionLabel/QuestionLabel'
import Textarea from './Components/Textarea/Textarea'
import InputNumber from './Components/Inputs/InputNumber'
import { useRef, useState } from 'react'
import Button from './Components/Button/Button'
import Stepper from './Components/Stepper/Stepper'
import InputRadioList from './Components/Inputs/InputRadioList'

function App() {

  const [enteredValues, setEnteredValues] = useState({
    name: '',
    part: '',
    number: '',
    value: '',
    dateSigning: '',
    isCompleted: '',
    dateCompleted: '',
    isCompletedInDate: '',
    paidValue: '',
    isCompletedProperly: '',
    controls: '',
    numberChanges: ''
  });

  const data = [
    {
      id: 'lcr1',
      name: 'control',
      labelContent: 'w zakresie zatrudnieniana podstawie stosunku pracy, w okolicznościach o których mowa w art. 95 ustawy Pzp'
    },
    {
      id: 'lcr2',
      name: 'control',
      labelContent: 'obejmujące aspekty społeczne'
    },
    {
      id: 'lcr3',
      name: 'control',
      labelContent: 'obejmujące aspekty środowiskowe'
    },
    {
      id: 'lcr4',
      name: 'control',
      labelContent: 'obejmujące aspekty innowacyjne'
    },
    {
      id: 'lcr5',
      name: 'control',
      labelContent: 'w zakresie żądania określonej etykiety społecznej'
    },
    {
      id: 'lcr6',
      name: 'control',
      labelContent: 'w zakresie żądania określonej etykiety środowiskowej (tzw. Ekoetykieta)'
    },
    {
      id: 'lcr7',
      name: 'control',
      labelContent: 'nie dotyczy'
    }
  ];

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  const ilosc = useRef(0);
  const [iloscZmian, setIloscZmian] = useState(0);

  const processingName = useRef();
  const [isEmpty, setIsEmpty] = useState(true);
  const [processingNameTouched, setProcessingNameTouched] = useState(false);

  const processingNameChangeHandler = () => {
    setProcessingNameTouched(true);
    if (processingName.current.value == '') setIsEmpty(true)
    else setIsEmpty(false);
    console.log(processingNameTouched + " " + isEmpty);
  }

  return (
    <MainContainer>
      <FormContainer>

        <ol>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Nazwa postępowania:" />
            <Textarea id="name" name="name" value={enteredValues.name} onChange={(event) => handleInputChange('name', event.target.value)} />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Część postępowania:" />
            <InputText id="part" name="part" value={enteredValues.part} onChange={(event) => handleInputChange('part', event.target.value)} />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Numer umowy:" />
            <InputText id="number" name="number" value={enteredValues.number} onChange={(event) => handleInputChange('number', event.target.value)} />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Wartość umowy:" />
            <InputText id="value" name="value" value={enteredValues.value} onChange={(event) => handleInputChange('value', event.target.value)} />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Data zawrcia umowy:" />
            <InputDate id="dateSigning" name="dateSigning" value={enteredValues.dateSigning} onChange={(event) => handleInputChange('dateSigning', event.target.value)} />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Czy umowa została wykonana?" />
            <InputButton id="input1" nameGroup="c" value="Tak" label="TAK" />
            <InputButton id="input2" nameGroup="c" value="Nie" label="NIE" />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Termin wykonania umowy:" />
            <InputDate />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Czy umowę wykonano w pierwotnie określonym terminie?" />
            <InputButton id="input3" nameGroup="a" value="Tak" label="TAK" />
            <InputButton id="input4" nameGroup="a" value="Nie" label="NIE" />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Łączna wartość wynagrodzenia wypłacona z tytułu zrealizowanej umowy (w zł brutto):" />
            <InputText />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Czy umowa została wykonana należycie?" />
            <InputButton id="input5" nameGroup="z" value="Tak" label="TAK" />
            <InputButton id="input6" nameGroup="z" value="Nie" label="NIE" />
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Podczas realizacji zamówienia zamawiający kontrolował przewidziane w zawartej umowie wymagania:" />
            {data.map((item) => <InputRadioList key={item.id} id={item.id} name={item.name} labelContent={item.labelContent} value={item.labelContent} onChange={(event) => handleInputChange('controls', event.target.value)}/>)}
          </li>
          <li className='flex w-full flex-wrap pb-10 relative'>
            <Stepper />
            <QuestionLabel question="Liczba zmian umowy" />
            <InputNumber refs={ilosc} zmienIlosc={setIloscZmian} />
          </li>
        </ol>
        {/* {iloscZmian > 0 && Array.from({ length: iloscZmian }, (v, i) => i + 1).map((el, index) => <p className='flex w-full flex-wrap pb-10 relative'><Stepper /><p className='relative' key={index}> * * * Informacje o zmianach umowy nr {index + 1} * * * </p></p>)} */}
        <Button onClick={enteredValues} dane={enteredValues} />
      </FormContainer>
    </MainContainer>
  )
}

export default App
