// Style your elements here
import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
`

export const Heading = styled.h1`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
`

export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
`

export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
`

export const ColorsPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  background-color: #00c9b7;
  border-radius: 6px;
  cursor: pointer;
  padding: 12px 24px 12px 24px;
  margin: 10px;
  outline: none;
`
