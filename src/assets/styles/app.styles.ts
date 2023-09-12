import styled from 'styled-components'

export const SHeader = styled.header`
  background-color: #000;
  padding: 0 120px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const SMain = styled.main`
  min-width: 1200px;
  padding: 0 24px;
  margin: 10px 96px 100px;
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`
export const SFooter = styled.header`
  background-color: #000;
  padding: 0 120px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`

export const STodo = styled.header`
  display: flex;
  justify-content: space-between;
`
export const STodoLayout = styled.div`
  align-items: center;
  padding: 5px 10px;
  margin: 15px auto;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
`

export const STodoModalLayout= styled.article`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  color: floralwhite;
`

export const STodoModal= styled.article`
  width: 600px;
  background: floralwhite;
`

