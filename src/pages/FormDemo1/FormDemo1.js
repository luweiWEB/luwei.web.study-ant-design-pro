import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  InputNumber,
  Radio,
  Icon,
  Tooltip,
  Row,
  Col,
} from 'antd';

@Form.create()
class FormDemo1 extends PureComponent {
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

  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 5 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 5 },
        sm: { span: 5 },
        md: { span: 5 },
      },
    };

    return (
      <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={13} sm={24}>
            <Form.Item {...formItemLayout} label={'名称'}>
              {getFieldDecorator('searchName')(<Input placeholder={'请输入名称'} />)}
            </Form.Item>
          </Col>
          <Col md={8} sm={24}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FormDemo1;
