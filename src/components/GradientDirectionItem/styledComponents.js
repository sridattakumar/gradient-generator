// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 12px 24px 12px 24px;
`
