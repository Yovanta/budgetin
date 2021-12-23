import UrlParser from '../../routes/url-parser';
import {addSaldo} from '../../../histori/dom';

const Tentang = {
    async render() {
        return `
        <main>
    <div class="saldo">
      <button type="button" class="tambah" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button>
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Masukkan Jumlah Saldo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="inputSaldo" action="">
                <input type="text" id="rupiah saldo-awal">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                <button type="submit" class="btn btn-primary" id="">Simpan</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <h3>Saldo : Rp. 
        <div id="saldo-tampil"> </div>
      </h3>
    </div>

    <div class="container-fluid">
      <div class="row">
          <div class="col-lg-4 col-md-1 mt-3">
            <div class="kotak">
              <div class="top-content">
                <img class="utama col-5 offset-md-1" src="./images/utama.png" alt="">
                <div class="text col-5 offset-md-1">
                  <h2>50%</h2>
                  <h5>Kebutuhan Sehari-hari</h5>
                </div>
              </div>
              <div class="histori">
                <div id="tanggal"></div>
                <div id="jumlah"></div>
                <div id="keterangan"></div>
              </div>
              <div class="saldo-kategori row mt-2">
                <div class="col-6">
                  <p>Saldo</p>
                <p>Pengeluaran</p>
                </div>
                <div class="col-6">
                  <p id="saldo-kebutuhan">Rp.</p>
                  <p class="keluar-kategori">Rp.</p>
                  <p>Rp.</p>
                </div>
              </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-1 mt-3">
          <div class="kotak">
            <div class="top-content">
              <img class="lainnya col-5 offset-md-1" src="./images/lainnya.png" alt="">
              <div class="text col-5 offset-md-1">
                <h2>30%</h2>
                <h5>Kebutuhan Lain / Hiburan</h5>
              </div>
            </div>
            <div class="histori">
              <div id="tanggal"></div>
              <div id="jumlah"></div>
              <div id="keterangan"></div>
            </div>
            <div class="saldo-kategori row mt-2">
              <div class="col-6">
                <p>Saldo</p>
              <p>Pengeluaran</p>
              </div>
              <div class="col-6">
                <p id="saldo-hiburan">Rp.</p>
                <p class="keluar-kategori">Rp.</p>
                <p>Rp.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-1 mt-3">
          <div class="kotak">
            <div class="top-content">
              <img class="tabungan col-md-5 offset-md-1" src="./images/tabungan.png" alt="">
              <div class="text col-md-5 offset-md-1">
                <h2>20%</h2>
                <h5>Tabungan / investasi</h5>
              </div>
            </div>
            <div class="histori">
              <div id="tanggal"></div>
              <div id="jumlah"></div>
              <div id="keterangan"></div>
            </div>
            <div class="saldo-kategori row mt-2">
                <div class="col-6">
                  <p>Saldo</p>
                <p>Pengeluaran</p>
                </div>
                <div class="col-6">
                  <p id="saldo-tabungan">Rp.</p>
                  <p class="keluar-kategori">Rp.</p>
                  <p>Rp.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-sm-12 pengeluaran">
          <div class="kotak_pengeluaran">
              <form class="form-keluar" action="#">
                <div class="row">
                  <div class="col">
                    <label for=""><h3>Pengeluaran : </h3></label>
                    <input class="input-pengeluaran" type="text" placeholder="Rp.">
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label for=""><h5>Tanggal :</h5></label>
                    <input type="date" name="" id="tanggal">
                    
                  </div>
                  </div>
                  <div class="row">
                    <label for=""><h5>Kategori :</h5></label>
                    <div class="col-kategori">
                      <input type="checkbox" name="" id="kebutuhan"> Kebutuhan sehari-hari
                      <input type="checkbox" name="" id="hiburan"> Kebutuhan lain/Hiburan
                      <input type="checkbox" name="" id="tabungan"> Tabungan/Investasi
                    </div>
                  </div>

                  <div class="row">
                    <label for=""><h5>Catatan</h5></label>
                    <textarea name="" id="" cols="5" rows="5" placeholder="tulis disini ..."></textarea>
                  </div>
                  <button type="submit" id="buttonPengeluaran" class="btn-pengeluaran">Simpan</button>
                </form>
          </div>
        </div>
      </div>
    </div>
  </main>

        `;
    },
    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
    }
};

export default Tentang;