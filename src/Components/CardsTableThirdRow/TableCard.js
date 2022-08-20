import Table from 'react-bootstrap/Table';
import  Container  from 'react-bootstrap/Container';
import Technology from './CategoryComponent/Technology';
import Dixons from './Companies/Dixons';
import Motels from './Companies/Motels';
import ZipCar from './Companies/ZipCar';
import Owning from './Companies/Owning';
import Prayers from './Companies/Prayers';

function TableCard() {
  return (
    <Container className='my-3 col-12 col-md-6 col-xl-8 col-xs-12'>
    <Table  hover>
      <thead>
        <tr>
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
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td><ZipCar/></td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>ttt </td>

        </tr>
        <tr>
            <td><Owning/></td>
        </tr>
        <tr>
            <td><Prayers/></td>
        </tr>
      </tbody>
    </Table>
    </Container>
  );
}

export default TableCard;