import "./App.css";
import { Button, Card, Container, Col, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Row lg={2}>
        <Col>
          <h1 className="mt-3 mb-5">かけ算の練習問題</h1>
          <Card className="p-3 mb-4">
            <h2 className="fs-4 mb-4">第◯問</h2>

            <div className="input-group mb-4">
              <span className="input-group-text fs-3">2 × 3 =</span>
              <input type="text" className="form-control"></input>
              <Button className="btn btn-primary answer-button">
                回答する
              </Button>
            </div>
          </Card>
          <Button className="btn btn-danger end-button">終了する </Button>
        </Col>
      </Row>

      <Row lg={2}>
        <Col>
          <div className="mt-5 results">
            <Card className="p-3 mb-4">
              <h2 className="fs-4 mb-4">
                解いた問題の履歴（正答率: ◯%_◯/◯ 正解）
              </h2>
              <Table hover>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>問題</th>
                    <th>あなたの回答</th>
                    <th>解答</th>
                    <th>正誤</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>問題</td>
                    <td>あなたの回答</td>
                    <td>解答</td>
                    <td>正誤</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
