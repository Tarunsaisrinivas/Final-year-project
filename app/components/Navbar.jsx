"use client"
import { Menu, Dropdown, Button, Modal } from 'antd';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { navItems } from '../constant/NavItem';
import Image from 'next/image';
import Logo from '@/public/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getMenu = (submenu) => (
    <Menu>
      {submenu.map((subItem, subIndex) => (
        <Menu.Item key={subIndex}>
          <a href={subItem.href}>{subItem.title}</a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <header className="bg-white fixed w-full top-0 z-50 shadow-md">
        <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            <Image src={Logo} width={100} height={100} />
          </a>

          <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
          >
            <MenuOutlined />
          </button>

          <div className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? 'block' : 'hidden'} absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 top-full lg:top-auto`}>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:items-center p-4 lg:p-0">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item relative">
                  {item.submenu ? (
                    <Dropdown overlay={getMenu(item.submenu)} trigger={['click']} placement="bottomLeft">
                      <a href={item.href || '#'} className="block py-2 text-lg items-center justify-between lg:justify-start">
                        {item.title} <DownOutlined className="ml-2 text-[0.7rem]" />
                      </a>
                    </Dropdown>
                  ) : (
                    <a href={item.href} className="block py-2 text-lg">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <Button type="primary" className="mt-2 lg:mt-0" onClick={showModal}>
              Login
            </Button>
          </div>
        </nav>
      </header>

      <Modal
        title="Login Options"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="flex flex-col space-y-4">
          <Button type="default" href="/admin-login">Admin Login</Button>
          <Button type="default" href="/faculty-login">Faculty Login</Button>
          <Button type="default" href="/student-login">Student Login</Button>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
