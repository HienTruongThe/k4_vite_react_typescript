import '../App.css';

const ProfilePage = () => {
  return /*html*/(
    <div className="body_prf">
      <div className="center_prf">
        <div className="banner">
          <div className="prf_bgr">
            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/07/05/background-cong-nghe-full-hd_035953614.jpg"
              alt="" />
          </div>
          <div className="prf_img">
            <img src="https://png.pngtree.com/png-vector/20220210/ourlarge/pngtree-avatar-male-character-curly-hair-png-image_4384455.png"
              alt="" />
          </div>
        </div>
        <div className="content">
          <p>Họ tên: Trương Thế Hiền</p>
          <p>Ngày sinh: 29/06/2002</p>
          <p>Quê quán: Thanh Hoá</p>
          <p>Định hướng: FullStack Web Developer</p>
          <p>Ngôn ngữ: C, Java, JavaScript, PHP</p>
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
