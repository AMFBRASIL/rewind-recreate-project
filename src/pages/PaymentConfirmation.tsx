
import { useState, useEffect } from "react";
import { ArrowLeft, Check, QrCode, Heart, Download, Share2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [qrCodeCopied, setQrCodeCopied] = useState(false);

  // Dados da retrospectiva confirmada
  const retrospectiveData = location.state?.formData || {
    recipient: 'namorado',
    title: 'Retrospectiva Especial',
    paymentId: 'PAY' + Math.random().toString(36).substr(2, 9).toUpperCase()
  };

  // URL de acesso à retrospectiva (simulada)
  const retrospectiveUrl = `https://momentus-click.app/view/${retrospectiveData.paymentId}`;
  
  // QR Code simulado
  const qrCodeData = retrospectiveUrl;

  const copyRetrospectiveUrl = async () => {
    try {
      await navigator.clipboard.writeText(retrospectiveUrl);
      setQrCodeCopied(true);
      toast({
        title: "Link copiado!",
        description: "O link da retrospectiva foi copiado para a área de transferência",
      });
      setTimeout(() => setQrCodeCopied(false), 3000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Tente copiar manualmente o link",
        variant: "destructive",
      });
    }
  };

  const shareRetrospective = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: retrospectiveData.title,
          text: `Veja esta retrospectiva especial criada para você!`,
          url: retrospectiveUrl,
        });
      } catch (err) {
        copyRetrospectiveUrl();
      }
    } else {
      copyRetrospectiveUrl();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/payment')}
            className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-white">Pagamento Confirmado</h1>
          <div className="w-20"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Confirmação de Pagamento */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Pagamento Confirmado!</h2>
              <p className="text-green-200 text-lg">Sua retrospectiva foi criada com sucesso</p>
            </div>

            {/* Dados do Pedido */}
            <div className="bg-white/5 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Detalhes do Pedido</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-200">ID do Pedido:</span>
                    <span className="text-white font-mono">{retrospectiveData.paymentId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Tipo:</span>
                    <span className="text-white capitalize">{retrospectiveData.recipient}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Título:</span>
                    <span className="text-white">{retrospectiveData.title}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-200">Valor Pago:</span>
                    <span className="text-white font-bold">R$ 49,90</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Status:</span>
                    <span className="text-green-400 font-semibold">Confirmado</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">Data:</span>
                    <span className="text-white">{new Date().toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code de Acesso */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <QrCode className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Acesse Sua Retrospectiva</h2>
              <p className="text-green-200">Use o QR Code ou link abaixo para acessar sua retrospectiva</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* QR Code */}
              <div className="text-center">
                <div className="bg-white p-8 rounded-2xl mb-4 inline-block">
                  <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-gray-400" />
                  </div>
                </div>
                <p className="text-green-200 text-sm">Escaneie com a câmera do seu celular</p>
              </div>

              {/* Link e Ações */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-green-200 block mb-2">Link de Acesso:</label>
                  <div className="bg-white/5 rounded-lg p-3 text-white text-sm break-all">
                    {retrospectiveUrl}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={copyRetrospectiveUrl}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3"
                  >
                    {qrCodeCopied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Link Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar Link
                      </>
                    )}
                  </Button>

                  <Button
                    onClick={shareRetrospective}
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </Button>

                  <Button
                    onClick={() => window.open(retrospectiveUrl, '_blank')}
                    variant="outline"
                    className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Ver Retrospectiva
                  </Button>
                </div>
              </div>
            </div>

            {/* Informações Importantes */}
            <div className="mt-8 space-y-4">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-blue-200 font-semibold mb-2">📱 Como acessar:</h4>
                <ul className="text-blue-200 text-sm space-y-1">
                  <li>• Escaneie o QR Code com a câmera do celular</li>
                  <li>• Ou copie e compartilhe o link diretamente</li>
                  <li>• A retrospectiva pode ser acessada quantas vezes quiser</li>
                </ul>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <h4 className="text-yellow-200 font-semibold mb-2">💾 Salve este acesso:</h4>
                <p className="text-yellow-200 text-sm">
                  Recomendamos salvar o link ou fazer uma captura de tela do QR Code para não perder o acesso à sua retrospectiva.
                </p>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-200 font-semibold mb-2">❤️ Obrigado pela preferência!</h4>
                <p className="text-green-200 text-sm">
                  Esperamos que você e seu ente querido tenham momentos especiais com esta retrospectiva personalizada.
                </p>
              </div>
            </div>
          </div>

          {/* Botão para criar nova retrospectiva */}
          <div className="text-center mt-8">
            <Button
              onClick={() => navigate('/create')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3"
            >
              Criar Nova Retrospectiva
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
