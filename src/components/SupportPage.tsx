import React, { useState } from 'react';
import { X, Mail, User, MessageSquare, AlertTriangle, Send, CheckCircle, Phone, Globe, Clock, Shield, Zap, HelpCircle } from 'lucide-react';
import { ThemeClasses } from '../types';
import { sendToTelegram } from '../utils';

interface SupportPageProps {
  darkMode: boolean;
  themeClasses: ThemeClasses;
  onClose: () => void;
}

interface SupportForm {
  name: string;
  email: string;
  phone: string;
  country: string;
  issueType: string;
  priority: string;
  subject: string;
  description: string;
  transactionHash: string;
  walletAddress: string;
  amount: string;
  cryptocurrency: string;
  paymentMethod: string;
  errorMessage: string;
  browserInfo: string;
  deviceInfo: string;
  preferredContact: string;
}

const SupportPage: React.FC<SupportPageProps> = ({ darkMode, themeClasses, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState<SupportForm>({
    name: '',
    email: '',
    phone: '',
    country: '',
    issueType: '',
    priority: '',
    subject: '',
    description: '',
    transactionHash: '',
    walletAddress: '',
    amount: '',
    cryptocurrency: '',
    paymentMethod: '',
    errorMessage: '',
    browserInfo: navigator.userAgent,
    deviceInfo: `${navigator.platform} - ${screen.width}x${screen.height}`,
    preferredContact: ''
  });

  const issueTypes = [
    { value: 'transaction', label: 'Transaction Issue', icon: Zap, color: 'text-orange-600' },
    { value: 'payment', label: 'Payment Problem', icon: Mail, color: 'text-blue-600' },
    { value: 'technical', label: 'Technical Support', icon: Shield, color: 'text-purple-600' },
    { value: 'account', label: 'Account Issue', icon: User, color: 'text-green-600' },
    { value: 'security', label: 'Security Concern', icon: AlertTriangle, color: 'text-red-600' },
    { value: 'general', label: 'General Inquiry', icon: HelpCircle, color: 'text-gray-600' }
  ];

  const priorities = [
    { value: 'low', label: 'Low Priority', desc: 'General questions, feature requests', color: 'text-green-600' },
    { value: 'medium', label: 'Medium Priority', desc: 'Account issues, payment delays', color: 'text-yellow-600' },
    { value: 'high', label: 'High Priority', desc: 'Transaction failures, urgent issues', color: 'text-orange-600' },
    { value: 'critical', label: 'Critical', desc: 'Security breaches, fund loss', color: 'text-red-600' }
  ];

  const handleInputChange = (field: keyof SupportForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const priorityEmoji = {
        'low': '🟢',
        'medium': '🟡', 
        'high': '🟠',
        'critical': '🔴'
      }[formData.priority] || '⚪';

      const issueEmoji = {
        'transaction': '⚡',
        'payment': '💳',
        'technical': '🔧',
        'account': '👤',
        'security': '🚨',
        'general': '❓'
      }[formData.issueType] || '📝';

      const message = `🎫 NEW SUPPORT TICKET SUBMISSION

${priorityEmoji} Priority: ${formData.priority.toUpperCase()}
${issueEmoji} Issue Type: ${formData.issueType.toUpperCase()}

👤 Customer Information:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone || 'Not provided'}
• Country: ${formData.country}
• Preferred Contact: ${formData.preferredContact}

📋 Issue Details:
• Subject: ${formData.subject}
• Description: ${formData.description}

💰 Transaction Information:
• Transaction Hash: ${formData.transactionHash || 'Not provided'}
• Wallet Address: ${formData.walletAddress || 'Not provided'}
• Amount: ${formData.amount || 'Not provided'}
• Cryptocurrency: ${formData.cryptocurrency || 'Not provided'}
• Payment Method: ${formData.paymentMethod || 'Not provided'}

🔧 Technical Information:
• Error Message: ${formData.errorMessage || 'None reported'}
• Browser: ${formData.browserInfo}
• Device: ${formData.deviceInfo}

⏰ Submitted: ${new Date().toLocaleString()}
🌐 Source: Support Page Form

---
Expected Response Time: ${
  formData.priority === 'critical' ? '15 minutes' :
  formData.priority === 'high' ? '1 hour' :
  formData.priority === 'medium' ? '4 hours' : '24 hours'
}`;

      await sendToTelegram({ message });
      
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          issueType: '',
          priority: '',
          subject: '',
          description: '',
          transactionHash: '',
          walletAddress: '',
          amount: '',
          cryptocurrency: '',
          paymentMethod: '',
          errorMessage: '',
          browserInfo: navigator.userAgent,
          deviceInfo: `${navigator.platform} - ${screen.width}x${screen.height}`,
          preferredContact: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Failed to submit support ticket:', error);
      // Show error to user
      alert('Failed to submit support ticket. Please try again or contact us directly at support@securep2p.pro');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className={`${themeClasses.cardBg} rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 ${darkMode ? 'border-blue-800' : 'border-blue-200'}`}>
        {/* Header */}
        <div className={`bg-gradient-to-r ${darkMode ? 'from-blue-900/30 to-purple-900/30' : 'from-blue-50 to-purple-50'} p-6 border-b ${themeClasses.border} relative`}>
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full ${themeClasses.hover} transition-colors`}
          >
            <X className={`w-5 h-5 ${themeClasses.textSecondary}`} />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-r ${themeClasses.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Support Center</h2>
              <p className={`text-sm ${themeClasses.textSecondary}`}>Get help with your Securep2p.pro experience</p>
            <div className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
              <p>Get help with your Securep2p.pro experience</p>
              <p className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
                Live agent chat available to resolve most issues instantly
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className={`w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl`}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-2`}>Support Ticket Submitted!</h3>
              <p className={`${themeClasses.textSecondary} mb-4`}>
                Thank you for contacting us. Our support team will respond within the expected timeframe based on your priority level.
              </p>
              <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} border ${darkMode ? 'border-green-800' : 'border-green-200'} rounded-xl p-4`}>
                <p className={`text-sm ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  We'll contact you at <strong>{formData.email}</strong> with updates on your support request.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Contact Information */}
              <section>
                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Contact Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Country
                    </label>
                    <input
                      type="text"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="Your country"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                    Preferred Contact Method <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'email', label: 'Email', icon: Mail },
                      { id: 'phone', label: 'Phone', icon: Phone },
                      { id: 'both', label: 'Both', icon: MessageSquare }
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handleInputChange('preferredContact', method.id)}
                        className={`border-2 rounded-xl p-3 transition-all duration-200 flex items-center justify-center ${
                          formData.preferredContact === method.id
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                            : `${themeClasses.border} ${themeClasses.cardBg} hover:border-blue-300`
                        }`}
                      >
                        <method.icon className="w-4 h-4 mr-2 text-blue-600" />
                        <span className={`text-sm font-medium ${themeClasses.text}`}>{method.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* Issue Classification */}
              <section>
                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                  <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                  Issue Classification
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Issue Type <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {issueTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleInputChange('issueType', type.value)}
                          className={`w-full border-2 rounded-xl p-3 transition-all duration-200 flex items-center ${
                            formData.issueType === type.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : `${themeClasses.border} ${themeClasses.cardBg} hover:border-blue-300`
                          }`}
                        >
                          <type.icon className={`w-4 h-4 mr-3 ${type.color}`} />
                          <span className={`text-sm font-medium ${themeClasses.text}`}>{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Priority Level <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {priorities.map((priority) => (
                        <button
                          key={priority.value}
                          type="button"
                          onClick={() => handleInputChange('priority', priority.value)}
                          className={`w-full border-2 rounded-xl p-3 transition-all duration-200 text-left ${
                            formData.priority === priority.value
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                              : `${themeClasses.border} ${themeClasses.cardBg} hover:border-blue-300`
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-sm font-medium ${priority.color}`}>{priority.label}</span>
                            <Clock className="w-4 h-4 text-gray-400" />
                          </div>
                          <p className={`text-xs ${themeClasses.textSecondary} mt-1`}>{priority.desc}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Issue Details */}
              <section>
                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                  <MessageSquare className="w-5 h-5 mr-2 text-purple-600" />
                  Issue Details
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Detailed Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={4}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="Please provide a detailed description of your issue, including what you were trying to do, what happened, and any error messages you received..."
                    />
                  </div>
                </div>
              </section>

              {/* Transaction Information */}
              <section>
                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                  <Zap className="w-5 h-5 mr-2 text-green-600" />
                  Transaction Information (If Applicable)
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Transaction Hash
                    </label>
                    <input
                      type="text"
                      value={formData.transactionHash}
                      onChange={(e) => handleInputChange('transactionHash', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="0x1234567890abcdef..."
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Wallet Address
                    </label>
                    <input
                      type="text"
                      value={formData.walletAddress}
                      onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="0xYourWalletAddress..."
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Amount
                    </label>
                    <input
                      type="text"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="100 USDT"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Cryptocurrency
                    </label>
                    <select
                      value={formData.cryptocurrency}
                      onChange={(e) => handleInputChange('cryptocurrency', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                    >
                      <option value="">Select cryptocurrency</option>
                      <option value="BTC">Bitcoin (BTC)</option>
                      <option value="ETH">Ethereum (ETH)</option>
                      <option value="USDT">Tether (USDT)</option>
                      <option value="USDC">USD Coin (USDC)</option>
                      <option value="BNB">Binance Coin (BNB)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Payment Method Used
                    </label>
                    <input
                      type="text"
                      value={formData.paymentMethod}
                      onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="UPI, Bank Transfer, PayPal, etc."
                    />
                  </div>
                </div>
              </section>

              {/* Technical Information */}
              <section>
                <h3 className={`text-lg font-semibold ${themeClasses.text} mb-4 flex items-center`}>
                  <Shield className="w-5 h-5 mr-2 text-purple-600" />
                  Technical Information
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                      Error Message (If Any)
                    </label>
                    <textarea
                      value={formData.errorMessage}
                      onChange={(e) => handleInputChange('errorMessage', e.target.value)}
                      rows={3}
                      className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                      placeholder="Copy and paste any error messages you received..."
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                        Browser Information
                      </label>
                      <input
                        type="text"
                        value={formData.browserInfo}
                        onChange={(e) => handleInputChange('browserInfo', e.target.value)}
                        className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                        placeholder="Auto-detected"
                        readOnly
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                        Device Information
                      </label>
                      <input
                        type="text"
                        value={formData.deviceInfo}
                        onChange={(e) => handleInputChange('deviceInfo', e.target.value)}
                        className={`w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${themeClasses.input}`}
                        placeholder="Auto-detected"
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Response Time Information */}
              <section>
                <div className={`${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'} border ${darkMode ? 'border-blue-800' : 'border-blue-200'} rounded-xl p-4`}>
                  <h4 className={`font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3 flex items-center`}>
                    <Clock className="w-4 h-4 mr-2" />
                    Expected Response Times
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="text-center">
                      <div className="text-red-600 font-bold">15 min</div>
                      <div className={themeClasses.textSecondary}>Critical</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-600 font-bold">1 hour</div>
                      <div className={themeClasses.textSecondary}>High</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-600 font-bold">4 hours</div>
                      <div className={themeClasses.textSecondary}>Medium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-600 font-bold">24 hours</div>
                      <div className={themeClasses.textSecondary}>Low</div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className={`flex-1 border-2 ${themeClasses.border} ${themeClasses.text} py-3 rounded-xl font-semibold ${themeClasses.hover} transition-all duration-300`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.issueType || !formData.priority || !formData.subject || !formData.description || !formData.preferredContact}
                  className={`flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:shadow-xl disabled:opacity-50 transition-all duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Support Ticket
                    </>
                  )}
                </button>
              </div>

              {/* Help Text */}
              <div className={`${darkMode ? 'bg-green-900/20' : 'bg-green-50'} border ${darkMode ? 'border-green-800' : 'border-green-200'} rounded-xl p-4`}>
                <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-green-800'}`}>
                  <strong>Need immediate help?</strong> For urgent issues, please use our live chat feature or contact us directly at support@securep2p.pro. 
                  Our team is available 24/7 to assist with critical problems.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupportPage;