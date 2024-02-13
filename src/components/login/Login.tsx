import React, { useState } from 'react';
import FCBLLogo from '../../assets/images/fcbl_logo.png';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';

const Login: React.FC = () => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e:any) => {
    e.preventDefault();
    // Mock login based on entered username and set user role
    if (userName === 'admin' && password === 'admin123') {
      login({ username: userName, role: 'admin' });
      navigate('/dashboard');
    } else if (userName === 'teamMember' && password === 'member123') {
      login({ username: userName, role: 'teamMember' });
      navigate('/dashboard');
    } else if (userName === 'teamLeader' && password === 'leader123') {
      login({ username: userName, role: 'teamLeader' });
      navigate('/dashboard');
    } else {
      // Handle invalid login attempt or show an error message
      setLoginError(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-50 p-5 rounded shadow bg-white">
        <p className="pb-4 text-center text-lg fw-bold custom-font">FCBL Jewelers</p>

        <Form>
          <FormGroup>
            <Label for="username" className="text-black">
              User Name<span className="text-red-600"> *</span>
            </Label>
            <Input
              name="username"
              placeholder="Username"
              className="rounded"
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password" className="text-black">
              Password<span className="text-red-600"> *</span>
            </Label>
            <Input
              name="password"
              placeholder="Password"
              className="rounded"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormGroup>
          {loginError && (
            <div className="text-red-600 mb-2">Invalid username or password. Please try again.</div>
          )}
          <div>
            <button
              className="bg-red-400 rounded-full px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 !important"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
          <FormGroup className="mt-3">
            <Link to="/" className="text-gray-600 hover:text-gray-800">
              Forgot Password?
            </Link>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default Login;
