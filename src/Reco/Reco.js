import React from "react";
import "../Reco/Reco.css";
import { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
// import { Dropdown } from "bootstrap";

// import {
//   Button,
//   Alert,
//   Modal,
//   Breadcrumb,
//   Card,
//   Form,
//   Row,
//   Container,
//   Dropdown,
//   Col,
// } from "react-bootstrap";

function Reco() {
  const [dropDowns, setDropDowns] = useState(false);

  const getDropDown = () => {
    if (dropDowns == false) setDropDowns(true);
    else setDropDowns(true);
    console.log(dropDowns);
  };

  useEffect(() => {
    setDropDowns();
  }, []);
  return (
    // <Container
    //   style={{
    //     border: "1px solid",
    //     padding: 20,
    //     margin: 20,
    //     borderRadius: "10px",
    //     width: "60vw",
    //   }}
    // >
    //   Fill in the following details to send recommendation to your subscribers.
    //   <Form className="Forma" style={{ width: "95%" }}>
    //     <Container
    //       fluid
    //       style={{ border: "1px solid", padding: 20, margin: 20 }}
    //     >
    //       <Row>
    //         <Col>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>is it buy call or sell call?</Form.Label>
    //             <Form.Control
    //               type="button"
    //               placeholder="Buy"
    //               variant="success"
    //             />
    //             <Form.Control
    //               type="button"
    //               placeholder="Buy"
    //               variant="success"
    //             />
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Trade Price</Form.Label>
    //             <Form.Control type="text" />
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label>is it moving stop or calling stop?</Form.Label>
    //             <Form.Control
    //               type="button"
    //               placeholder="Buy"
    //               variant="success"
    //             />
    //             <Form.Control
    //               type="button"
    //               placeholder="Buy"
    //               variant="success"
    //             />
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Stop Loss</Form.Label>
    //             <Form.Control type="text" />
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Exchange name</Form.Label>
    //             <Dropdown style={{ background: "white", color: "#ffff" }}>
    //               <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>

    //               <Dropdown.Menu>
    //                 <Dropdown.Item href="#/action-1">NFO</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-2">CDS</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-3">NSE</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-4">BSE</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-5">MCX</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-6">BCD</Dropdown.Item>
    //               </Dropdown.Menu>
    //             </Dropdown>
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group controlId="formEmail">
    //             <Form.Label>Quantity</Form.Label>
    //             <Form.Control type="text" />
    //           </Form.Group>
    //         </Col>
    //       </Row>

    //       <Row>
    //         <Col>
    //           <Form.Group controlId="formBasicEmail">
    //             <Form.Label>Instrument Type</Form.Label>
    //             <Dropdown>
    //               <Dropdown.Toggle variant="success" id="dropdown-basic">
    //                 Please select an Exchange first
    //               </Dropdown.Toggle>

    //               <Dropdown.Menu>
    //                 <Dropdown.Item href="#/action-1">NFO</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-2">CDS</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-3">NSE</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-4">BSE</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-5">MCX</Dropdown.Item>
    //                 <Dropdown.Item href="#/action-6">BCD</Dropdown.Item>
    //               </Dropdown.Menu>
    //             </Dropdown>
    //           </Form.Group>
    //         </Col>
    //         <Col>
    //           <Form.Group>
    //             <Form.Label>Reccomendation Validity</Form.Label>
    //             <Form.Control type="text" />
    //           </Form.Group>
    //         </Col>
    //       </Row>
    //     </Container>
    //   </Form>
    // </Container>
    <Pages>
      <OuterBox>
        <InnerBox>
          <FormLeft>
            <Rows>
              <InputText>Is it buy call or sell call?</InputText>
              <ButtonBox>
                <GreenButton>
                  <button>Buy</button>
                </GreenButton>
                <CreamButton>
                  <button>Sell</button>
                </CreamButton>
              </ButtonBox>
            </Rows>
            <Rows>
              <InputText>Is it moving stop or closing stop? </InputText>
              <ButtonBox>
                <GreenButton>
                  <button>Moving</button>
                </GreenButton>
                <CreamButton>
                  <button>Closing</button>
                </CreamButton>
              </ButtonBox>
            </Rows>
            <Rows>
              <InputText>Exchange name</InputText>
              <Dropdowns>
                <select name="exchange">
                  <option value="-1"></option>
                  <option value="1">NFO</option>
                  <option value="2">CDS</option>
                  <option value="3">NSE</option>
                  <option value="4">BSE</option>
                  <option value="5">MCX</option>
                  <option value="6">BCD</option>
                </select>
              </Dropdowns>
            </Rows>
            <Rows>
              <InputText>Instrument Type</InputText>
              <Dropdowns>
                <select
                  disabled={true}
                  name="exchange"
                  placeholder="Please select an exchange first"
                >
                  <option value="-1" select>
                    Please select an exchange first
                  </option>
                  <option value="1">NFO</option>
                  <option value="2">CDS</option>
                  <option value="3">NSE</option>
                  <option value="4">BSE</option>
                  <option value="5">MCX</option>
                  <option value="6">BCD</option>
                </select>
              </Dropdowns>
            </Rows>
          </FormLeft>
          <FormRight>
            <Rows>
              <InputText>Trade Price</InputText>
              <InputContainer>
                <form>
                  <input type="number" step="0.01" placeholder="" />
                </form>
              </InputContainer>
            </Rows>
            <Rows>
              <InputText>Stop Loss</InputText>
              <InputContainer>
                <form>
                  <input type="number" step="0.01" placeholder="" />
                </form>
              </InputContainer>
            </Rows>
            <Rows>
              <InputText>Quantity</InputText>
              <InputContainer>
                <form>
                  <input type="number" step="1" placeholder="" />
                </form>
              </InputContainer>
            </Rows>
            <Rows>
              <InputText>Recommendation Validity</InputText>
              <InputContainer>
                <form>
                  <input type="date" name="" placeholder="" />
                </form>
              </InputContainer>
            </Rows>
          </FormRight>
        </InnerBox>
        <SubmitButton>
          <GreenButton>
            <button>Add Recommendation</button>
          </GreenButton>
        </SubmitButton>
      </OuterBox>
    </Pages>
  );
}

export default Reco;

const Pages = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  // border: "1px solid";
`;

const OuterBox = styled.div`
  width: 95%;
  height: auto;
  // margin: 45px;
  padding: 40px;
  // justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  border-radius: 7px;
`;

const InnerBox = styled.div`
  height: auto;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  // border: "1px solid";
  border-radius: 7px;
  background-color: rgb(250, 250, 250);
`;

const FormLeft = styled.div`
  height: auto;
  width: 45%;
  // padding: 10px;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  // display: flex;
`;

const FormRight = styled.div`
  height: auto;
  width: 45%;
  // padding: 10px;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`;

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;
  form {
    display: flex;
    padding-left: 10px;
    justify-content: space-between;
    align-items: center;
    height: 35px;
    input {
      background-color: rgb(250, 250, 250);
      flex: 1;
      border: none;
      width: 100%;
      font-size: 16px;
    }
    input:focus {
      outline: none;
    }
  }
`;

const Rows = styled.div`
  border: 1px solid #8d8d8e;
  padding: 10px;
  }
`;

const InputText = styled.div`
  // text-size: 12px;
  margin-bottom: 15px;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  // border: 1px solid #8d8d8e;
  display: flex;
  justify-content: flex-start;
`;

const SubmitButton = styled.div`
  width: 100%;
  // border: 1px solid #8d8d8e;
  display: flex;
  padding-top: 40px;
  justify-content: center;
`;

const GreenButton = styled.div`
  // margin-top: 10px;
  margin-right: 40px;

  button {
    padding: 5px 17px 5px 17px;
    flex: 1;
    border: none;
    background-color: #2e8b57;
    color: rgb(250, 250, 250);
    border-radius: 7px;
  }
`;

const CreamButton = styled.div`
  // margin-top: 10px;

  button {
    padding: 5px 17px 5px 17px;
    flex: 1;
    border: 1px solid rgb(0 0 0 / 12%);
    color: #2e8b57;
    background-color: rgb(250, 250, 250);
    border-radius: 7px;
  }
`;

const Dropdowns = styled.div`
  // border: 1px solid rgb(0 0 0 / 12%);
  height: 37px;
  select {
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
    border-radius: 5px;
  }
  select:focus {
    outline: none;
  }
`;
