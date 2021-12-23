"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _urlParser = _interopRequireDefault(require("../../routes/url-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Tentang = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", "\n        <main>\n    <div class=\"saldo\">\n      <button type=\"button\" class=\"tambah\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">+</button>\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Masukkan Jumlah Saldo</h5>\n              <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n            </div>\n            <div class=\"modal-body\">\n              <form action=\"\">\n                <input type=\"text\" id=\"rupiah saldo-awal\">\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Batal</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Simpan</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <h3>Saldo : Rp. </h3>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-lg-4 col-md-1 mt-3\">\n            <div class=\"kotak\">\n              <div class=\"top-content\">\n                <img class=\"utama col-5 offset-md-1\" src=\"./images/utama.png\" alt=\"\">\n                <div class=\"text col-5 offset-md-1\">\n                  <h2>50%</h2>\n                  <h5>Kebutuhan Sehari-hari</h5>\n                </div>\n              </div>\n              <div class=\"histori\">\n                <div id=\"tanggal\"></div>\n                <div id=\"jumlah\"></div>\n                <div id=\"keterangan\"></div>\n              </div>\n              <div class=\"saldo-kategori row mt-2\">\n                <div class=\"col-6\">\n                  <p>Saldo</p>\n                <p>Pengeluaran</p>\n                </div>\n                <div class=\"col-6\">\n                  <p>Rp.</p>\n                  <p class=\"keluar-kategori\">Rp.</p>\n                  <p>Rp.</p>\n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\"col-lg-4 col-md-1 mt-3\">\n          <div class=\"kotak\">\n            <div class=\"top-content\">\n              <img class=\"lainnya col-5 offset-md-1\" src=\"./images/lainnya.png\" alt=\"\">\n              <div class=\"text col-5 offset-md-1\">\n                <h2>30%</h2>\n                <h5>Kebutuhan Lain / Hiburan</h5>\n              </div>\n            </div>\n            <div class=\"histori\">\n              <div id=\"tanggal\"></div>\n              <div id=\"jumlah\"></div>\n              <div id=\"keterangan\"></div>\n            </div>\n            <div class=\"saldo-kategori row mt-2\">\n              <div class=\"col-6\">\n                <p>Saldo</p>\n              <p>Pengeluaran</p>\n              </div>\n              <div class=\"col-6\">\n                <p>Rp.</p>\n                <p class=\"keluar-kategori\">Rp.</p>\n                <p>Rp.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-1 mt-3\">\n          <div class=\"kotak\">\n            <div class=\"top-content\">\n              <img class=\"tabungan col-md-5 offset-md-1\" src=\"./images/tabungan.png\" alt=\"\">\n              <div class=\"text col-md-5 offset-md-1\">\n                <h2>20%</h2>\n                <h5>Tabungan / investasi</h5>\n              </div>\n            </div>\n            <div class=\"histori\">\n              <div id=\"tanggal\"></div>\n              <div id=\"jumlah\"></div>\n              <div id=\"keterangan\"></div>\n            </div>\n            <div class=\"saldo-kategori row mt-2\">\n                <div class=\"col-6\">\n                  <p>Saldo</p>\n                <p>Pengeluaran</p>\n                </div>\n                <div class=\"col-6\">\n                  <p>Rp.</p>\n                  <p class=\"keluar-kategori\">Rp.</p>\n                  <p>Rp.</p>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"kotak_pengeluaran\">\n              <form class=\"form-keluar\" action=\"#\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <label for=\"\"><h3>Pengeluaran : </h3></label>\n                    <input class=\"input-pengeluaran\" type=\"text\" placeholder=\"Rp.\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <label for=\"\"><h5>Kategori :</h5></label>\n                  </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-kategori\">\n                      <input type=\"checkbox\" name=\"\" id=\"utama\"> Kebutuhan sehari-hari\n                      <input type=\"checkbox\" name=\"\" id=\"lainnya\"> Kebutuhan lain/Hiburan\n                      <input type=\"checkbox\" name=\"\" id=\"tabungan\"> Tabungan/Investasi\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n                    <label for=\"\"><h5>Catatan</h5></label>\n                    <textarea name=\"\" id=\"\" cols=\"5\" rows=\"5\" placeholder=\"tulis disini ...\"></textarea>\n                  </div>\n                  <button type=\"submit\" id=\"buttonPengeluaran\" class=\"btn-pengeluaran\">Simpan</button>\n                </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n        ");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var url;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = _urlParser["default"].parseActiveUrlWithoutCombiner(); // const tentangBudgetin = await TheRestaurantSource.detailRestaurant(url.id);
            // const restaurantContainer = document.querySelector('#restaurant');
            // restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail.restaurant);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = Tentang;
exports["default"] = _default;