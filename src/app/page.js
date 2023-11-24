import Image from 'next/image'

export default function Home() {
  return (
    <div className="page-wrapper py-3">
      <div className="container">
        <div className="bg_dark_blue text-center rounded p-3 mb-3">
          <h2 className="mb-0 text-white ">ลงทะเบียนเพื่อรับส่วนลดทันที!</h2>
        </div>
        <div className="row mb-4">
          <div className="col-lg-6 mb-3">
            <div className="bg-secondary rounded p-3">
              <img className="mw-100 rounded" src="images/register.jpg" />
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="border_dark_blue rounded p-3" style={{ fontSize: 22 }}>
              <div className="text-center  py-3">
                <h3>แบบฟอร์มลงทะเบียนติดต่อพนักงานขาย</h3>
                <p>พร้อมติดต่อกลับใน 1 ชั่วโมง</p>
              </div>
              <form>
                <div className="row ">
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>ชื่อ-นามสกุล ผู้ติดต่อ*</label>
                    <input type className="border_dark_blue form-control" id placeholder="ชื่อ-นามสกุล" />
                  </div>
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>เบอร์โทรศัพท์*</label>
                    <input type className="border_dark_blue form-control" id placeholder="เบอร์โทรศัพท์" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>เบอร์โทรศัพท์สำรอง (ถ้ามี)</label>
                    <input type className="border_dark_blue form-control" id placeholder="เบอร์โทรศัพท์สำรอง" />
                  </div>
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>LINE ID (ไลน์ไอดี)</label>
                    <input type className="border_dark_blue form-control" id placeholder="ไลน์ไอดี" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>จังหวัด (ที่ตั้งร้าน)*</label>
                    <input type className="form-control border_dark_blue " id placeholder="จังหวัดที่ตั้งร้าน" />
                  </div>
                  <div className="form-group col-sm-6 mb-3">
                    <label className="mb-1 font-md" htmlFor>เขต/อำเภอ (ที่ตั้งร้าน)*</label>
                    <input type className="form-control border_dark_blue " id placeholder="เขต/อำเภอ ที่ตั้งร้าน" />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 mb-3">
                    <label className="mb-1 font-md" htmlFor="inputState">สนใจติดต่อเรื่องใด</label>
                    <select id="inputState" className="border_dark_blue form-control">
                      <option selected>โปรดเลือกเรื่องที่ต้องการติดต่อ</option>
                      <option>ติดต่อพนักงาน สนใจใช้งานระบบ ez-order</option>
                      <option>ต่ออายุการใช้งาน ez-order</option>
                      <option>ติดต่อฝ่ายบริการช่วยเหลือแก้ไขปัญหา</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 mb-3">
                    <label className="mb-1 font-md" htmlFor="inputState">ท่านสนใจ ez-order รุ่นใด</label>
                    <select id="inputState" className="border_dark_blue form-control">
                      <option selected>ez-order POS (iPad)</option>
                      <option>Wongnai POS รุ่น Mini</option>
                      <option>Wongnai POS รุ่น 1 จอ</option>
                      <option>Wongnai POS รุ่น 2 จอ</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-sm-12 mb-4">
                    <label className="mb-1 font-md" htmlFor="inputState">คุณรู้จัก ez-order จากไหน*</label>
                    <select id="inputState" className="border_dark_blue form-control">
                      <option selected>คุณรู้จัก ez-order จากไหน</option>
                      <option>Facebook</option>
                      <option>Google</option>
                      <option>Instagram</option>
                      <option>Tiktok</option>
                      <option>YouTube</option>
                      <option>บทความบนเว็บไซต์ https://www.ez-order.co/</option>
                      <option>มีผู้อื่นแนะนำ</option>
                      <option>เห็นจากลูกค้าท่านอื่น</option>
                      <option>Influencer: torpenguin ต่อเพนกวิน</option>
                      <option>Influencer: เพื่อนแท้ร้านอาหาร</option>
                      <option>Influencer อื่นๆ</option>
                      <option>แอป Wongnai Merchant App</option>
                    </select>
                  </div>
                </div>
                <div className="text-center mb-2">
                  <button type="submit" className="btn bg_dark_blue text-white">ลงทะเบียนใช้งาน</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="row mb-3">
          <div className="col-12">
            <div className="text-center">
              <img className="mw-100 " src="https://d9hhrg4mnvzow.cloudfront.net/business.wongnai.com/foodstory/leadform/c5b3b8c8-21de-4265-b8be-255098efb78c-c4d66753-aba1-43b1-9d72-78d3ea64595c-aec2557a-5b98-49ea-8ab5-3f31701c0f85-screen-shot-2566-10-02-at-16-03-35-original.png" />
            </div>
          </div>
        </div> */}
        {/* <div className="row mb-5">
          <div className="col-12">
            <div className="text-center">
              <img className="mw-100 " src="https://d9hhrg4mnvzow.cloudfront.net/business.wongnai.com/foodstory/leadform/2825086d-1966-4e2a-9c82-05d988e22eed-52cd719b-b428-4317-9d78-ac94504fce47.PNG" />
            </div>
          </div>
        </div> */}
        <div className="row mb-5 ">
          <div className="col-12 text-center mb-3">
            <h1 className="lh-sm">ฟีเจอร์ครบ <br />
              ครอบคลุมทุกการใช้งาน</h1>
          </div>
          <div className="col-md-12 ">
            <div className="text-center">
              <img className="mw-100 " src="images/features.png" />
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 text-center mb-3">
            <h1 className="lh-sm">ตอบโจทย์ร้านอาหารทุกประเภท</h1>
          </div>
          <div className="col-12">
            <img className="mw-100 " src="images/answering.png" />
          </div>
        </div>
        <div className="row mb-5 gx-3">
          <div className="col-12 text-center mb-3">
            <h1 className="lh-sm">ระบบจัดการร้านที่มืออาชีพเลือกใช้</h1>
          </div>
          <div className="col-4">
            <img className="mw-100 " src="images/comment_1.jpg" />
          </div>
          <div className="col-4">
            <img className="mw-100 " src="images/comment_2.jpg" />
          </div>
          <div className="col-4">
            <img className="mw-100 " src="images/comment_3.jpg" />
          </div>
        </div>
      </div>
    </div>
  )
}
