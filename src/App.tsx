import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'skills', label: 'Skills' },
            { key: 'projects', label: 'Projects' },
          ]}
        />
      </Header>

      <Content style={{ padding: '48px' }}>
        Main Content Area
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © Portfolio
      </Footer>
    </Layout>
  )
}

export default App
