import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import  Container  from 'react-bootstrap/Container';
import Technology from './CategoryComponent/Technology';
import Dixons from './Companies/Dixons';
import Motels from './Companies/Motels';
import ZipCar from './Companies/ZipCar';
import Owning from './Companies/Owning';
import Cafes from './Companies/Cafes';
import Kmart from './Companies/Kmart';
import Prayers from './Companies/Prayers';
import Grocery from './CategoryComponent/Grocery';
import Fashion from './CategoryComponent/Fashion';

function TableCard() {
  return (
    <Container className='my-3 col-12 col-md-6 col-xl-8 col-lg-8 col-sm-12 col-xs-12'>
      {/* <Card >
        <Card.Body> */}
    <Table  hover className='shadow-lg mb-3 bg-white rounded'>
      <thead style={{
        backgroungColor: '#F3F2F7 !important'
      }}>
        <tr
        style={{
          backgroungColor: '#F3F2F7 !important'
        }}>
          <th>Company</th>
          <th>Category</th>
          <th>Views</th>
          <th>Revenue</th>
          <th>Sales</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
            <Dixons/>
        </td>
        <td>
             <Technology/>
        </td>
        <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">23.4k</span>
                <span class="font-small-2 text-muted">in 24 hours</span>
                </div>
        </td>
        <td>$891.2</td>
        <td>
            <div class="d-flex align-items-center">
                <span class="fw-bolder me-1">68%</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-danger"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            </div>
        </td>
     </tr>
        <tr>
          <td><Motels/></td>
          <td><Grocery/></td>
          <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">78k</span>
                <span class="font-small-2 text-muted">in 2 days</span>
                </div>
        </td>
        <td>$668.51</td>
        <td class="">
          <div class="d-flex align-items-center">
            <span class="fw-bolder me-1">97%</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        </td>
        </tr>
        <tr>
          <td><ZipCar/></td>
          <td><Fashion/></td>
          <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">162</span>
                <span class="font-small-2 text-muted">in 5 days </span>
                </div>
        </td>
        <td>$993.47</td>
        <td class="">
          <div class="d-flex align-items-center">
            <span class="fw-bolder me-1">62%</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        </td>

        </tr>
        <tr>
            <td><Owning/></td>
            <td><Technology/></td>
            <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">204</span>
                <span class="font-small-2 text-muted">in 24 hours</span>
                </div>
        </td>
        <td>$432.98</td>
        <td class="">
          <div class="d-flex align-items-center">
            <span class="fw-bolder me-1">88%</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        </td>
        </tr>
        <tr>
          <td><Cafes/></td>
          <td><Grocery/></td>
          <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">208k</span>
                <span class="font-small-2 text-muted">in 1 week </span>
                </div>
        </td>
        <td>$609.73</td>
        <td>
            <div class="d-flex align-items-center">
                <span class="fw-bolder me-1">16%</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-danger"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
            </div>
        </td>
        </tr>
        <tr>
          <td><Kmart/></td>
          <td><Fashion/></td>
          <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">990k</span>
                <span class="font-small-2 text-muted">in 2 months</span>
                </div>
        </td>
        <td>$219.8</td>
        <td class="">
          <div class="d-flex align-items-center">
            <span class="fw-bolder me-1">78%</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        </td>
        </tr>
        <tr>
            <td><Prayers/></td>
            <td><Fashion/></td>
            <td class="text-nowrap">
            <div class="d-flex flex-column">
                <span class="fw-bolder mb-25">12.9k</span>
                <span class="font-small-2 text-muted">in 12 hours</span>
                </div>
        </td>
        <td>$376.18</td>
        <td class="">
          <div class="d-flex align-items-center">
            <span class="fw-bolder me-1">42%</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-success"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
        </div>
        </td>
        </tr>
      </tbody>
    </Table>
    {/* </Card.Body>
    </Card> */}
    </Container>
  );
}

export default TableCard;