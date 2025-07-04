import { Form, Input, Button, message, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useRegisterMutation} from "../../services/authApi.ts";

const RegisterPage = () => {
    const [register, { isLoading }] = useRegisterMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        const result = await register(values);

        if (result.error) {
            const errors = result.error.data;

            if (typeof errors === 'object') {
                Object.entries(errors).forEach(([field, messages]) => {
                    if (Array.isArray(messages)) {
                        messages.forEach((msg) =>
                            message.error(`${field}: ${msg}`)
                        );
                    } else {
                        message.error(`${field}: ${messages}`);
                    }
                });
            } else {
                message.error('Помилка при реєстрації');
            }
        } else {
            message.success('Реєстрація успішна');
            navigate('/login');
        }
    };

    return (
        <Card title="Реєстрація" style={{ maxWidth: 400, margin: '50px auto' }}>
            <Form layout="vertical" onFinish={onFinish} form={form}>
                <Form.Item
                    name="username"
                    label="Ім’я користувача"
                    rules={[{ required: true, message: 'Введіть ім’я користувача' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Введіть email' },
                        { type: 'email', message: 'Некоректний email' },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        { required: true, message: 'Пароль є обов\'язковим!' },
                        { min: 6, message: 'Пароль має містити мінімум 6 символів' },
                        { pattern: /[A-Z]/, message: 'Пароль повинен містити хоча б одну велику літеру' },
                        { pattern: /\d/, message: 'Пароль повинен містити хоча б одну цифру' },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={isLoading} block>
                        Зареєструватися
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default RegisterPage;