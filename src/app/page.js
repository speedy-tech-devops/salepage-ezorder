'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'
import Swal from 'sweetalert2'
export default function Home() {
  const [formData, setFormData] = useState({
    ShopName : '',
    FullName: '',
    Mobile: '',
    Email: '',
    Password: '',
    PackageType: 'PLUS',
    ShopType : "RESTAURANT"
  });

  const [errors, setErrors] = useState({
    ShopName : '',
    FullName: '',
    Mobile: '',
    Email: '',
    Password: '',
    PackageType: 'PLUS',
    ShopType : "RESTAURANT"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };
  const validateForm = () => {
    let valid = true;
    if (!formData.ShopName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, ShopName: ' กรุณาใส่ชื่อร้าน' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, FullName: '' }));
    }
    if (!formData.FullName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, FullName: 'กรุณาใส่ชื่อ ชื่อ-นามสกุล ผู้ติดต่อ' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, FullName: '' }));
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.Mobile)) {
      setErrors((prevErrors) => ({ ...prevErrors, Mobile: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, Mobile: '' }));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.Email)) {
      setErrors((prevErrors) => ({ ...prevErrors, Email: 'รูปแบบอีเมลไม่ถูกต้อง' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, Email: '' }));
    }
    if (formData.Password.length > 20) {
      setErrors((prevErrors) => ({ ...prevErrors, Password: 'รหัสผ่านต้องมีความยาวไม่เกิน 20 ตัวอักษร' }));
      valid = false;
    } else if (formData.Password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, Password: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร' }));
      valid = false;
    } else if (formData.Password.length <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, Password: 'กรุณาใส่รหัสผ่าน' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, Password: '' }));
    }

    return valid;
  };
  const senddata = async (params) => {
    console.log(params);
    const url = "https://api-ezorder.speedy-tech.co/v1/register"
    console.log(url);
     const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: params
    });
     const json = await response.json();
     console.log(json);
     return json;
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // ต่อ api มัส
      await senddata(JSON.stringify(formData)).then((res)=> {
        Swal.fire({
          icon: "success",
          title: "ลงทะเบียนสำเร็จ",
          html: `
            <p>ข้อมูลจะถูกส่งไปทางอีเมลของท่านค่ะ</p>
            <button class="btn text-white" style="background-color:#06C755;font-size: 24px;min-width: 250px" onclick="location.href='https://lin.ee/AWjp3I3'">เพิ่มเพื่อน</button>
          `,
          showConfirmButton: false,
        });
        return res.data

      })
    }
  };
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
              <form onSubmit={handleSubmit}>
                <div className="row ">
                <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="ShopName">ชื่อร้าน *</label>
                    <input
                      type="text"
                      className={`border_dark_blue form-control ${errors.ShopName ? 'is-invalid' : ''}`}
                      id="ShopName"
                      name="ShopName"
                      placeholder="ชื่อร้าน *"
                      value={formData.ShopName}
                      onChange={handleChange}
                    />
                    {errors.ShopName && <div className="invalid-feedback">{errors.ShopName}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="FullName">ชื่อ-นามสกุล ผู้ติดต่อ*</label>
                    <input
                      type="text"
                      className={`border_dark_blue form-control ${errors.FullName ? 'is-invalid' : ''}`}
                      id="FullName"
                      name="FullName"
                      placeholder="ชื่อ-นามสกุล"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.FullName && <div className="invalid-feedback">{errors.FullName}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="Mobile">เบอร์โทรศัพท์*</label>
                    <input
                      type="number"
                      className={`border_dark_blue form-control ${errors.Mobile ? 'is-invalid' : ''}`}
                      id="Mobile"
                      name="Mobile"
                      placeholder="เบอร์โทรศัพท์"
                      value={formData.Mobile}
                      onChange={handleChange}
                    />
                    {errors.Mobile && <div className="invalid-feedback">{errors.Mobile}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="Email">อีเมล </label>
                    <input
                      type="email"
                      className={`border_dark_blue form-control ${errors.Email ? 'is-invalid' : ''}`}
                      id="Email"
                      name="Email"
                      placeholder="อีเมล"
                      value={formData.Email}
                      onChange={handleChange}
                    />
                    {errors.Email && <div className="invalid-feedback">{errors.Email}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-3">
                    <label className="mb-1 font-md" htmlFor="Password">รหัสผ่าน </label>
                    <input
                      type="password"
                      className={`border_dark_blue form-control ${errors.Password ? 'is-invalid' : ''}`}
                      id="Password"
                      name="Password"
                      placeholder="รหัสผ่าน"
                      value={formData.Password}
                      onChange={handleChange}
                    />
                    {errors.Password && <div className="invalid-feedback">{errors.Password}</div>}
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
