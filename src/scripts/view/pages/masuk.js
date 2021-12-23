import UrlParser from '../../routes/url-parser';

const Masuk = {
    async render() {
        return `
        <main class="login-container">
            <div id="content">
                <section class="content-image">
                    <img class="gambar-daftar" src="./images/budgetin.png" alt="budgetin-aplikasi pengolah keuanganmu">
                </section>
            </div>

            <aside>
                <section class="masuk-konten">
                    <form class="was-validated mb-5">
                        <div class="mb-3 mt-3">
                        <label for="inputEmail" class="form-label">email :</label>
                        <div class="input-container">
                            <i class="fa fa-envelope fa-lg icon"></i>
                            <input type="email" class="form-control input-field" id="inputEmail" placeholder="namakamu@gmail.com" name="uname" required>
                        </div>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="mb-3">
                        <label for="inputPassword" class="form-label">kata sandi :</label>
                        <div class="input-container">
                            <i class="fa fa-lock fa-lg icon" aria-hidden="true"></i>
                            <input type="password" class="form-control input-field" id="inputPassword" placeholder="kata sandimu" name="pswd" required>
                        </div>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <a href="/#/home"><button type="submit" id="buttonMasuk" class="btn-masuk">Masuk</button></a>
                        <a href="/#/daftar">Belum punya akun? Klik disini</a>
                    </form>
                </section>
            </aside>
        </main>
        `;
    },
    async afterRender() {

    }
};

export default Masuk;