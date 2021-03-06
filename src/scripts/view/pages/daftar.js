import UrlParser from '../../routes/url-parser';

const Daftar = {
    async render() {
        return `
        <main class="daftar-container">
            <div id="content">
                <section class="content-image">
                    <img class="gambar-daftar" src="./images/budgetin.png" alt="budgetin-aplikasi pengolah keuanganmu">
                </section>
            </div>

            <aside>
                <section class="daftar-konten">
                    <form class="was-validated reg-form">
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
                        <div class="mb-3">
                            <label for="repeatPassword" class="form-label">kata sandi :</label>
                        <div class="input-container">
                            <i class="fa fa-lock fa-lg icon" aria-hidden="true"></i>
                            <input type="password" class="form-control input-field" id="repeatPassword" placeholder="ulangi kata sandimu" name="pswd" required>
                        </div>
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="form-check mb-3">
                        <input class="form-check-input" type="checkbox" id="myCheck"  name="remember" required>
                        <label class="form-check-label" for="myCheck">Saya setuju dengan syarat dan ketentuan yang berlaku</label>
                        <div class="valid-feedback">Valid.</div>
                        <div class="invalid-feedback">Ceklist box ini untuk melanjutkan.</div>
                        </div>

                    <a href="/#/masuk"><button type="submit" id="buttonDaftar" class="btn-daftar">Daftar</button></a>
                    <a href="/#/masuk">Sudah punya akun? Klik disini</a>
                    </form>
                </section>
            </aside>
        </main>
        `;
    },
    async afterRender() {

    }
};

export default Daftar;