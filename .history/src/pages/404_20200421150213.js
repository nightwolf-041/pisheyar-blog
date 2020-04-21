import React from 'react'

import Layout from '../components/layout'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout title="صفحه مورد نظر یافت نشد">
        <h1 className="notfound-title">خطای 404</h1>
        <p>صفحه مورد نظر شما یافت نشد</p>
      </Layout>
    )
  }
}

export default NotFoundPage