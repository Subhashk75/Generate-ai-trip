import React, { useState } from "react";
import { 
  doCreateUserWithEmailAndPassword, 
  doSignInWithEmailAndPassword, 
  doSignInWithGoogle 
} from "../../Service/authContext/Auth";
import { useNavigate } from "react-router-dom";
import GlassCard from "../Common/GlassCard";
import { FcGoogle } from "react-icons/fc";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await doSignInWithGoogle();
      navigate('/create-trip');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        await doSignInWithEmailAndPassword(formData.email, formData.password);
        navigate('/create-trip');
      } else {
        await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        navigate('/create-trip');
      }
    } catch (error) {
      alert(error.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base px-4 py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-ai-glow/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />

      <GlassCard className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-accent mb-2">
            {isLogin ? "Welcome Back" : "Begin Your Journey"}
          </h2>
          <p className="text-accent/60 font-body">
            {isLogin ? "Enter your credentials to continue" : "Create an account to start planning"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-accent/80 ml-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="hello@traveler.com"
              className="w-full bg-white/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-ai-glow outline-none placeholder:text-accent/30"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-accent/80 ml-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full bg-white/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-ai-glow outline-none placeholder:text-accent/30"
            />
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-accent/80 ml-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="w-full bg-white/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-ai-glow outline-none placeholder:text-accent/30"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent text-white font-semibold py-4 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-premium"
          >
            {loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-accent/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white/0 px-2 text-accent/40 backdrop-blur-sm">Or continue with</span>
          </div>
        </div>

        <button
          onClick={onGoogleSignIn}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 border border-accent/5 text-accent font-medium py-4 rounded-2xl transition-all shadow-soft"
        >
          <FcGoogle size={24} />
          <span>Google Assistant</span>
        </button>

        <div className="mt-8 text-center text-sm font-body">
          <span className="text-accent/60">
            {isLogin ? "New to our service?" : "Already among us?"}
          </span>{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-ai-glow font-semibold hover:underline"
          >
            {isLogin ? "Create Account" : "Access Account"}
          </button>
        </div>
      </GlassCard>
    </div>
  );
};

export default AuthForm;
