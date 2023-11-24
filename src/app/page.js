'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image'

export default function Home() {
  const [formData, setFormData] = useState({
    shopName : '',
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    shopName : '',
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };
  const validateForm = () => {
    let valid = true;
    if (!formData.shopName.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, shopName: ' กรุณาใส่ชื่อร้าน' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: 'กรุณาใส่ชื่อ ชื่อ-นามสกุล ผู้ติดต่อ' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'รูปแบบอีเมลไม่ถูกต้อง' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }
    if (formData.password.length > 20) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'รหัสผ่านต้องมีความยาวไม่เกิน 20 ตัวอักษร' }));
      valid = false;
    } else if (formData.password.length < 8) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร' }));
      valid = false;
    } else if (formData.password.length <= 0) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'กรุณาใส่รหัสผ่าน' }));
      valid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    return valid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // ต่อ api มัส
      await axios.post('/', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          const { data } = error.response;
          setErrors(data.errors);
        } else {
          console.error('Error:', error.message);
        }
      });
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
                    <label className="mb-1 font-md" htmlFor="name">ชื่อ-นามสกุล ผู้ติดต่อ*</label>
                    <input
                      type="text"
                      className={`border_dark_blue form-control ${errors.shopName ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="ชื่อ-นามสกุล"
                      value={formData.shopName}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.shopName}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="name">ชื่อ-นามสกุล ผู้ติดต่อ*</label>
                    <input
                      type="text"
                      className={`border_dark_blue form-control ${errors.name ? 'is-invalid' : ''}`}
                      id="name"
                      name="name"
                      placeholder="ชื่อ-นามสกุล"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="phoneNumber">เบอร์โทรศัพท์*</label>
                    <input
                      type="number"
                      className={`border_dark_blue form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="เบอร์โทรศัพท์"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-1">
                    <label className="mb-1 font-md" htmlFor="email">อีเมล </label>
                    <input
                      type="email"
                      className={`border_dark_blue form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      name="email"
                      placeholder="อีเมล"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div className="form-group col-sm-12 mb-3">
                    <label className="mb-1 font-md" htmlFor="password">รหัสผ่าน </label>
                    <input
                      type="password"
                      className={`border_dark_blue form-control ${errors.password ? 'is-invalid' : ''}`}
                      id="password"
                      name="password"
                      placeholder="รหัสผ่าน"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
