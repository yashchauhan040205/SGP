import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  graduationYear?: number;
  major?: string;
  bio?: string;
}

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          // If no token, redirect to login
          navigate('/login');
          return;
        }

        // Fetch user data from backend
        const response = await fetch('http://localhost:5000/api/auth/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        const data = await response.json();
        
        if (!data.success) {
          // If token is invalid, redirect to login
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login on error
        localStorage.removeItem('token');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Redirect to home page
    navigate('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-alumni-purple"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Welcome back, <span className="text-gradient">{user?.name}</span>
          </h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-alumni-purple text-alumni-purple hover:bg-alumni-purple hover:text-white"
          >
            Log out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Name</p>
                <p>{user?.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Email</p>
                <p>{user?.email}</p>
              </div>
              {user?.graduationYear && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Graduation Year</p>
                  <p>{user.graduationYear}</p>
                </div>
              )}
              {user?.major && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Major</p>
                  <p>{user.major}</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                className="w-full border-alumni-purple text-alumni-purple hover:bg-alumni-purple hover:text-white"
              >
                Edit Profile
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your recent interactions</CardDescription>
            </CardHeader>
            <CardContent className="h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">No recent activity</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">View All</Button>
              <Button className="bg-gradient-to-r from-alumni-blue to-alumni-purple hover:from-alumni-blue/90 hover:to-alumni-purple/90 text-white transition-all">New Activity</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 