
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Sun, Moon, User, Mail } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen animated-background">
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
      
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Welcome to your personal space</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glass-button hover:bg-white/20 dark:hover:bg-black/20"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              onClick={handleLogout}
              className="glass-button bg-red-500/80 hover:bg-red-600/90 text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Welcome Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <User className="h-6 w-6" />
                <span>Welcome, {user?.name}!</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                You have successfully logged into your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-4 glass-card">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Email Address</p>
                  <p className="text-muted-foreground">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 glass-card">
                <User className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Full Name</p>
                  <p className="text-muted-foreground">{user?.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-card animate-fade-in hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Profile Settings</CardTitle>
                <CardDescription>
                  Manage your account settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="glass-button w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <CardTitle className="text-lg">Security</CardTitle>
                <CardDescription>
                  Update your password and security settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="glass-button w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-lg">Notifications</CardTitle>
                <CardDescription>
                  Configure your notification preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="glass-button w-full">
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
