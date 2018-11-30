import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  Button,
  Table,
  Row,
  Col,
  Card,
  Modal,
} from 'antd';

@Form.create()
class FormDemo1 extends PureComponent {

  state = {
    isShowEditModal: false, //  显示Modal
  }

  handleSubmit = event => {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(['searchName'], (err, fieldsValue) => {
      if (err) return;

      const { searchName = '' } = fieldsValue;

      alert('查询条件为：' + searchName);

      this.setState({
        searchName,
      });
    });
  };

  handleAddClick = () => {
    this.setState ({
      isShowEditModal: true,
    })
  }

  handleEditOkClick = () => {
    console.log('点击确定');

    this.setState ({
      isShowEditModal: false,
    })
  }

  handleEditCancelClick = () => {
    console.log('点击取消');

    this.setState ({
      isShowEditModal: false,
    })
  }

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 1 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 10 },
        md: { span: 10 },
      },
    };
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }];
    
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    

    return (
        <Card>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <Row gutter={{ md: 8, lg: 12, xl: 20 }}>
              <Col md={8} sm={10}>
                <Form.Item {...formItemLayout} label={'名称'}>
                  {getFieldDecorator('searchName')(<Input placeholder={'请输入名称'} />)}
                </Form.Item>
              </Col>
              <Col md={12} sm={12}>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
              </Col>
            </Row>
          </Form>

          <Row>
            <Button type="primary" onClick={this.handleAddClick}>+ 新增</Button>
          </Row>
    
          <br/>
          
          <Table dataSource={dataSource} columns={columns} />

          <Modal
            title="新增信息"
            visible={this.state.isShowEditModal}
            onOk={this.handleEditOkClick}
            onCancel={this.handleEditCancelClick}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        
        </Card>
    );
  }
}

export default FormDemo1;
