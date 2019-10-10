// import React from 'react'
// import { Icon, Row, Col } from 'antd';

// export default class Product extends React.Component {
//   render() {
//     return (
//       <div className="product ">
//         <section className="service container">
//           <div className="title text-tac">
//             <h1>企业服务</h1>
//           </div>
//           <Row>
//             <Col className="item" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
//               <div>
//                 <img src="/static/product/company5.png" />
//                 <p className="pt-title">政企通 </p>
//                 <p className="pt-content">
//                   实时掌握政策动态，为企业提供申请通道服务。包括政策动态、政策申请、政务咨询、政府服务、基建项目承接。
//                   </p>
//               </div>
//             </Col>
//             <Col className="item" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
//               <div>
//                 <img src="/static/product/company8.png" />
//                 <p className="pt-title">银企通</p>
//                 <p className="pt-content">
//                   充分了解金融机构产品种类，为企业解决融资难、融资贵问题。包括财经动态、企业融资、投资咨询、项目开发、项目运营。
//                 </p>
//               </div>
//             </Col>
//             <Col className="item" xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
//               <div>
//                 <img src="/static/product/company1.png" />
//                 <p className="pt-title">信企通 </p>
//                 <p className="pt-content">
//                   建立数据中心，为企业打破信息不透明枷锁。包括信息动态、信息咨询、信息通道、信息对称、数据中心。
//                 </p>
//               </div>
//             </Col>
//           </Row>
//           <Row>
//             <Col className="item" xs={24} sm={24} md={24} lg={{ span: 10, offset: 2 }} xl={{ span: 10, offset: 2 }} xxl={{ span: 10, offset: 2 }}>
//               <div>
//                 <img src="/static/product/company6.png" />
//                 <p className="pt-title">科技通</p>
//                 <p className="pt-content">
//                   为企业提供各项办公自动化定制服务，提高运营效率。包括行业资讯、软件开发、自动化定制、互联网+、网站建设、虚拟产品研发。
//                 </p>
//               </div>
//             </Col>
//             <Col className="item" xs={24} sm={24} md={24} lg={10} xl={10} xxl={10}>
//               <div>
//                 <img src="/static/product/company7.png" />
//                 <p className="pt-title">知企通</p>
//                 <p className="pt-content">
//                   为企业打造全方位知识产权服务。包括专利申请、转让，商标注册、转让，知识产权质押融资，知识产权维权，知识产权评估。
//                 </p>
//               </div>
//             </Col>
//           </Row>
//         </section>
//         <section className="patent container-fluid">
//           <div className="container">
//             <div className="title text-tac">
//               <h1>专利服务</h1>
//             </div>
//             <Row >
//               <Col className="item" xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
//                 <div>
//                   <div className="img-container">
//                     <img src="/static/product/patent1.png" />
//                   </div>
//                   <div className="info-panel">
//                     <div className="title">中国发明专利申请</div>
//                     <div className="summary ellipsis2">对产品、方法或其改进提出的新的技术方案，可申请发明专利。</div>
//                     <div className="check"><span>查看详情</span>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               <Col className="item" xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
//                 <div >
//                   <div className="img-container">
//                     <img src="/static/product/patent2.png" />
//                   </div>
//                   <div className="info-panel">
//                     <div className="title">专利著录项目变更</div>
//                     <div className="summary ellipsis2">申请人、发明人、代理人等有关事项发生变化的，国家知识产权局根据当事人请求依法对这些事项进行更改的程序</div>
//                     <div className="check"><span>查看详情</span>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               <Col className="item" xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
//                 <div >
//                   <div className="img-container">
//                     <img src="/static/product/patent5.png" />
//                   </div>
//                   <div className="info-panel">
//                     <div className="title">中国实用新型专利申请</div>
//                     <div className="summary ellipsis2">对产品形状,构造或其结合所提出改进技术方案，可申请实用新型专利。</div>
//                     <div className="check"><span>查看详情</span>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//               <Col className="item" xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
//                 <div >
//                   <div className="img-container">
//                     <img src="/static/product/patent4.png" />
//                   </div>
//                   <div className="info-panel">
//                     <div className="title">中国外观设计专利申请</div>
//                     <div className="summary ellipsis2">对产品形状、图案或其结合以及色彩与形状、图案的结合做出的新设计。</div>
//                     <div className="check"><span>查看详情</span>
//                     </div>
//                   </div>
//                 </div>
//               </Col>
//             </Row>

//             <div className="service-line">
//               <Row>
//                 <Col className="col" xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
//                   <div className="cell-container">
//                     <div className="blue-title"><span>专利无效答辩</span>  <Icon type="right" />
//                     </div>
//                     <div className="summary ellipsis2">针对专利无效请求，专利权人提出相应的抗辩，并可以根据案件情况提交相关证据，就无效请求人的请求事实和理由提出答辩。</div>
//                   </div>
//                 </Col>
//                 <Col className="col" xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
//                   <div className="cell-container">
//                     <div className="blue-title"><span>恢复权利请求</span>  <Icon type="right" />
//                     </div>
//                     <div className="summary ellipsis2">当事人因不可抗拒的事由而导致其权利丧失的，可以在法定时间内向国务院专利行政部门请求恢复权利。</div>
//                   </div>
//                 </Col>
//                 <Col className="col" xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
//                   <div className="cell-container">
//                     <div className="blue-title"><span>专利无效宣告请求</span> <Icon type="right" />
//                     </div>
//                     <div className="summary ellipsis2">专利权经国务院专利行政部门授予并公告后，任何单位和个人认为该专利权不符合《中华人民共和国专利法》及其实施细则的规定，自公告之日起可以请求国务院专利复审委员会宣告该公告的专利无效。</div>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </div>
//         </section>
//         <section className="software container">
//           <div className="title">
//             <h1>信息化建设</h1>
//           </div>
//           <Row>
//             <Col className="item" xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
//               <div>
//                 <span>门户网站</span>
//                 <img src="/static/product/software1.png" />
//                 <p>专业定制各类网站系统，如企业官网、电子政务、行业门户、电商、互联网金融、C2C、B2C、O2O、在线教育、网上交易、在线支付等</p>
//               </div>
//             </Col>

//             <Col className="item" xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
//               <div>
//                 <span>管理系统</span>
//                 <img src="/static/product/software2.png" />
//                 <p>专业定制管理软件，包括客户管理、项目管理、ERP、设备管理、库存管理、教育培训、物流系统、生产管理、销售管理、人事管理、OA办公、资产管理等</p>
//               </div>
//             </Col>

//             <Col className="item" xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
//               <div>
//                 <span>手机应用</span>
//                 <img src="/static/product/software3.png" />
//                 <p>专业定制IOS、A ndroid移动互联网应用，iPhone、iPad、Android手机、Android平板，APP原生开发，Html5开发、移动门户等</p>
//               </div>
//             </Col>

//             <Col className="item" xs={24} sm={12} md={12} lg={6} xl={6} xxl={6}>
//               <div>
//                 <span>微信应用</span>
//                 <img src="/static/product/software4.png" />
//                 <p>专业定制微信公众号、企业号、订阅号，微网站开发，微信商城、微信推送、微信支付、微营销、微信与内部系统对接打通等</p>
//               </div>
//             </Col>
//           </Row>
//         </section>
//       </div>
//     )
//   }
// }
"use strict";