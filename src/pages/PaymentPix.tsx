
import { useState, useEffect } from "react";
import { ArrowLeft, Copy, Check, Clock, QrCode, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PaymentPix = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [pixCopied, setPixCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos em segundos

  // Dados simulados do PIX
  const pixData = {
    valor: "49,90",
    codigo: "00020126580014BR.GOV.BCB.PIX0136123e4567-e12b-12d1-a456-42665544000027040000530398654049.905802BR5925RETROSPECTIVA DIGITAL LTDA6014SAO PAULO6304A1B2",
    qrCodeUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
  };

  // Dados da retrospectiva (vindos do formulário anterior)
  const retrospectiveData = location.state?.formData || {
    recipient: 'namorado',
    title: 'Retrospectiva Especial'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const copyPixCode = async () => {
    try {
      await navigator.clipboard.writeText(pixData.codigo);
      setPixCopied(true);
      toast({
        title: "Código PIX copiado!",
        description: "Cole no seu app do banco para fazer o pagamento",
      });
      setTimeout(() => setPixCopied(false), 3000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Tente copiar manualmente o código PIX",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/create')}
            className="flex items-center space-x-2 text-white hover:text-pink-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Pagamento PIX</h1>
          <div className="w-20"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Resumo do Pedido */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Resumo do Pedido</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Tipo de Retrospectiva:</span>
                  <span className="text-white font-semibold capitalize">{retrospectiveData.recipient}</span>
                </div>
                
                <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                  <span className="text-purple-200">Título:</span>
                  <span className="text-white font-semibold">{retrospectiveData.title || 'Retrospectiva Especial'}</span>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-semibold">Total:</span>
                    <span className="text-3xl text-pink-400 font-bold">R$ {pixData.valor}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <div className="flex items-center space-x-2 text-yellow-200 mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Tempo restante para pagamento:</span>
                </div>
                <div className="text-2xl font-bold text-yellow-100 text-center">
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>

            {/* QR Code e PIX */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <QrCode className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Pague com PIX</h2>
                <p className="text-purple-200">Escaneie o QR Code ou copie o código PIX</p>
              </div>

              {/* QR Code */}
              <div className="bg-white p-6 rounded-2xl mb-6">
                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
              </div>

              {/* Código PIX */}
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <label className="text-sm text-purple-200 block mb-2">Código PIX:</label>
                  <div className="bg-white/10 rounded-lg p-3 text-white text-sm font-mono break-all">
                    {pixData.codigo}
                  </div>
                </div>

                <Button
                  onClick={copyPixCode}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3"
                >
                  {pixCopied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Código Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar Código PIX
                    </>
                  )}
                </Button>
              </div>

              <div className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-200 text-sm text-center">
                  Após o pagamento, você receberá o QR Code da sua retrospectiva por email em até 5 minutos.
                </p>
              </div>
            </div>
          </div>

          {/* Instruções */}
          <div className="mt-8 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Como pagar com PIX</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-white font-semibold mb-2">Abra seu app do banco</h4>
                <p className="text-purple-200 text-sm">
                  Acesse a área PIX do seu banco ou carteira digital
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-white font-semibold mb-2">Escaneie ou cole o código</h4>
                <p className="text-purple-200 text-sm">
                  Use a câmera para escanear o QR Code ou cole o código PIX
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-white font-semibold mb-2">Confirme o pagamento</h4>
                <p className="text-purple-200 text-sm">
                  Verifique os dados e confirme o pagamento de R$ {pixData.valor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPix;
