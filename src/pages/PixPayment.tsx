
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, Copy, CheckCircle, QrCode, Heart, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const PixPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  // Mock data - in a real app this would come from the backend
  const pixCode = "00020126580014BR.GOV.BCB.PIX013636c4c8c8-1234-1234-1234-123456789abc5204000053039865802BR5925RETROSPECTIVA DIGITAL LTDA6009SAO PAULO62070503***6304ABCD";
  const amount = "R$ 29,90";
  const retrospectiveType = location.state?.retrospectiveType || "Casal";
  
  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      toast({
        title: "Código PIX copiado!",
        description: "Cole no seu banco para realizar o pagamento",
      });
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Tente copiar manualmente o código PIX",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6 pt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-white/10 mr-3"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-2xl font-bold text-white">Pagamento PIX</h1>
        </div>

        {/* Payment Card */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-white text-xl">
              Retrospectiva {retrospectiveType}
            </CardTitle>
            <div className="text-3xl font-bold text-white mt-2">
              {amount}
            </div>
          </CardHeader>
        </Card>

        {/* QR Code Section */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-white flex items-center justify-center gap-2">
              <QrCode className="w-5 h-5" />
              Escaneie o QR Code
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {/* QR Code Placeholder */}
            <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <QrCode size={80} className="mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">QR Code PIX</p>
              </div>
            </div>
            <p className="text-purple-200 text-sm">
              Use o app do seu banco para escanear o código
            </p>
          </CardContent>
        </Card>

        {/* PIX Code Section */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
          <CardHeader>
            <CardTitle className="text-white text-center">
              Ou copie o código PIX
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/20 rounded-lg p-3 mb-4">
              <p className="text-white text-xs font-mono break-all">
                {pixCode}
              </p>
            </div>
            <Button
              onClick={handleCopyPix}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar código PIX
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-6">
          <CardContent className="pt-6">
            <h3 className="text-white font-semibold mb-4 text-center">
              Como pagar com PIX:
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <p className="text-purple-200 text-sm">
                  Abra o app do seu banco ou carteira digital
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <p className="text-purple-200 text-sm">
                  Escolha "Pagar com PIX" ou "PIX Copia e Cola"
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <p className="text-purple-200 text-sm">
                  Escaneie o QR Code ou cole o código PIX
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <p className="text-purple-200 text-sm">
                  Confirme o pagamento e aguarde a aprovação
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Info */}
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-semibold">Pagamento Seguro</span>
          </div>
          <p className="text-purple-200 text-xs">
            Sua retrospectiva será liberada automaticamente após a confirmação do pagamento.
          </p>
        </div>

        {/* Timer */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-purple-200 text-sm">
            <Clock className="w-4 h-4" />
            <span>Este código expira em 30 minutos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixPayment;
